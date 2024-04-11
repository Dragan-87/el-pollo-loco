class DrawableObject {
    objetctPositionX;
    objetctPositionY;
    img = new Image();
    height = 150;
    width = 75;
    imageCache = {};
    currentImage = 0;


    constructor(img, objetctPositionX) {
        this.objetctPositionX = objetctPositionX;
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

    draw() {
        this.ctx.drawImage(this.img, this.objetctPositionX, this.objetctPositionY, this.width, this.height);
    }

}
