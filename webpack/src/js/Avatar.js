class Avatar {
    constructor(imgUrl) {
        const img = new Image();
        img.src = imgUrl;
        this.img = img;
    }
    appendToBody() {
        const root = document.querySelector('body');
        root.append(this.img);
    }
}

export default Avatar;
