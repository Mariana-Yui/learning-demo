class ImageCropper {
    constructor() {
        this.file = document.querySelector('input');
        this.sourceRef = document.querySelector('.source');
        this.targetRef = document.querySelector('.target');
        this.canvasWrapper = document.querySelector('.canvasWraper');
        this.canvasRef = document.querySelector('canvas');
        this.dataUrl = '';
        this.start = {
            x: 0,
            y: 0
        };
        this.last = {
            x: 0,
            y: 0
        };
        this.times = 1;
        this.startDrag = false;
    }
    // input上传本地文件触发操作
    handleChange() {
        const file = this.file.files[0];
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
            const dataUrl = event.target.result;
            this.sourceRef.src = dataUrl;
            this.sourceRef.onload = () => this.drawImage();
        };
        fileReader.readAsDataURL(file);
    }
    // 放大/缩小
    handleLarger() {
        this.times = this.times + 0.1;
        this.drawImage();
    }
    handleSmaller() {
        this.times = this.times - 0.1;
        this.drawImage();
    }
    // 鼠标事件, 这个计算画图理解一下就发现就是这样
    handleMouseDown(event) {
        this.start.x = event.clientX;
        this.start.y = event.clientY;
        this.startDrag = true;
    }
    handleMouseMove(event) {
        this.startDrag && this.drawImage(event.clientX - this.start.x + this.last.x, event.clientY - this.start.y + this.last.y);
    }
    // last实际上是累加每次移动的距离, 即图片左/上距离浏览器的距离
    handleMouseUp(event) {
        this.last.x = event.clientX - this.start.x + this.last.x;
        this.last.y = event.clientY - this.start.y + this.last.y;
        this.startDrag = false;
    }
    drawImage(left = this.last.x, top = this.last.y) {
        const image = this.sourceRef;
        const canvas = this.canvasRef;
        let imageWidth = image.width;
        let imageHeight = image.height;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (imageWidth > imageHeight) {
            const scale = imageHeight / imageWidth;
            imageWidth = canvas.width * this.times;
            imageHeight = canvas.height * scale * this.times;
        } else {
            const scale = imageWidth / imageHeight;
            imageHeight = canvas.height * this.times;
            imageWidth = canvas.width * scale * this.times;
        }
        // 带上4，5参数会进行缩放
        ctx.drawImage(image, (canvas.width - imageWidth) / 2 + left, (canvas.height - imageHeight) / 2 + top, imageWidth, imageHeight);
    }
    // 裁剪图片，生成裁剪后图片
    handleCrop() {
        const ctx = this.canvasRef.getContext('2d');
        const imageData = ctx.getImageData(100, 100, 100, 100);
        const avatar = document.createElement('canvas');
        avatar.width = 100;
        avatar.height = 100;
        const avatarCtx = avatar.getContext('2d');
        avatarCtx.putImageData(imageData, 0, 0);
        // param1 导出格式
        this.dataUrl = avatar.toDataURL('image/jpeg', 1);
        this.targetRef.src = this.dataUrl;
    }
    // 下载图片
    handleDownload() {
        const a = document.createElement('a');
        a.href = this.dataUrl;
        a.download = '美少女.jpg';
        a.dispatchEvent(new MouseEvent('click'));
    }
    // 上传图片
    handleUpload() {
        // 这里也可以直接用canvas.toBlob()
        const bytes = atob(this.dataUrl.split(',')[1]);
        const ab = new ArrayBuffer(bytes.length);
        const intArr = new Uint8Array(ab); // 要指定长度
        for (let i = 0, len = bytes.length; i < len; i++) {
            intArr[i] = bytes.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: 'image/jpeg' });
        // const url = URL.createObjectURL(blob);
        // const img = new Image();
        // img.src = url;
        // document.body.appendChild(img);
        // URL.revokeObjectURL(url);
        const xhr = new XMLHttpRequest();
        const file = new FormData();
        file.append('avatar', blob);
        xhr.open('post', 'http://localhost:7001/upload');
        xhr.send(file);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert('上传成功!');
            }
        };
    }
    bindEvents() {
        this.file.addEventListener('change', this.handleChange.bind(this));
        this.canvasWrapper.addEventListener('mousedown', this.handleMouseDown.bind(this));
        this.canvasWrapper.addEventListener('mousemove', this.handleMouseMove.bind(this));
        this.canvasWrapper.addEventListener('mouseup', this.handleMouseUp.bind(this));
        document.querySelector('.larger').addEventListener('click', this.handleLarger.bind(this));
        document.querySelector('.smaller').addEventListener('click', this.handleSmaller.bind(this));
        document.querySelector('.confirm').addEventListener('click', this.handleCrop.bind(this));
        document.querySelector('.download').addEventListener('click', this.handleDownload.bind(this));
        document.querySelector('.upload').addEventListener('click', this.handleUpload.bind(this));
    }
}

const imageCropper = new ImageCropper();

imageCropper.bindEvents();
