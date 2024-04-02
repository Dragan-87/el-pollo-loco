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
}
