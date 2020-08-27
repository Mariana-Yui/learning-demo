class ImageCropper {
    constructor() {
        this.file = document.querySelector('input');
        this.sourceRef = document.querySelector('.source');
        this.targetRef = document.querySelector('.target');
        this.canvasRef = document.querySelector('canvas');
        this.dataUrl = '';
        this.start = {
            x: 0,
            y: 0
        };
        this.end = {
            x: 0,
            y: 0
        };
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
    // 鼠标事件

    // 裁剪图片，生成裁剪后图片
    handleCrop() {
        const ctx = this.canvasRef.getContext('2d');
        const imageData = ctx.getImageData(100, 100, 100, 100);
        const avatar = document.createElement('canvas');
        avatar.width = 100;
        avatar.height = 100;
        const avatarCtx = avatar.getContext('2d');
        avatarCtx.putImageData(imageData);
        this.dataUrl = avatar.toDataURL();
        this.targetRef.src = this.dataUrl;
    }
    bindEvents() {
        this.file.addEventListener('change', this.handleChange.bind(this));
    }
}

const imageCropper = new ImageCropper();

imageCropper.bindEvents();
