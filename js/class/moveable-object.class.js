class MoveableObject {
    objetctPositionX;
    objetctPositionY;
    defaultObjetctPositionY;
    img = new Image();
    height = 150;
    width = 75;
    speed;
    imageCache = {};
    currentImage = 0;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    energy = 100;


    constructor(img, objetctPositionX) {
        this.objetctPositionX = objetctPositionX;
        this.defaultObjetctPositionY = 480 - this.height - 60;
        this.loadImage(img);
    }

    /**
     * Loads an image from the specified path and sets it as the source of the object's image element.
     * @param {string} path - The path to the image file.
     */
    loadImage(path) {
        this.img.src = path;
    }

    /**
     * Loads images into the image cache.
     * @param {Array} array - An array of image paths.
     */
    loadImages(array) {
        array.forEach((path) => {
            let image = new Image();
            image.src = path;
            this.imageCache[path] = image;
        });
    }

    moveRight() {
        this.objetctPositionX += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.objetctPositionX -= this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.objetctPositionY -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 15);
    }

    isAboveGround() {
        return this.objetctPositionY < this.defaultObjetctPositionY;
    }

    drawColision() {
        this.ctx.beginPath();
        this.ctx.lineWidth = '5';
        this.ctx.strokeStyle = 'red';
        this.ctx.rect(this.objetctPositionX, this.objetctPositionY, this.width, this.height);
        this.ctx.stroke();
    };

    // isColliding(obj) {
    //     return (this.objetctPositionX + this.width) >= obj.objetctPositionX && this.X <= (obj.objetctPositionX + obj.width) &&
    //         (this.objetctPositionY + this.offsetY + this.height) >= obj.objetctPositionY &&
    //         (this.objetctPositionY + this.offsetY) <= (obj.objetctPositionY + obj.height) &&
    //         obj.onCollisionCourse; 

    // }

    isColliding(obj) {
        return this.objetctPositionX + this.width > obj.objetctPositionX &&
            this.objetctPositionY + this.height > obj.objetctPositionY &&
            this.objetctPositionX < obj.objetctPositionX && this.objetctPositionY < obj.objetctPositionY + obj.height;
    }
}
