class ImageCropper {
    constructor() {
        this.file = document.querySelector('input');
        this.sourceRef = document.querySelector('.source');
        this.targetRef = document.querySelector('.target');
        this.canvasRef = document.querySelector('canvas');
        this.dataUrl = '';
    }
    // input上传本地文件触发操作
    handleChange() {
        const file = this.file.files[0];
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
            this.dataUrl = event.target.result;
            this.sourceRef.src = this.dataUrl;
            this.sourceRef.onload = () => this.drawImage();
        };
        fileReader.readAsDataURL(file);
    }
    // 裁剪图片，生成裁剪后图片
    handleCrop() {
        const imageData = this.canvasRef.i;
    }
    bindEvents() {
        this.file.addEventListener('change', this.handleChange.bind(this));
    }
}
