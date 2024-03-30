class MoveableObject {
    objetctPositionX;
    objetctPositionY;
    img;
    img = new Image();
    height = 150;
    width = 75;
    imageCache = {};

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


    constructor(img) {
        this.loadImage(img);
    }

    moveRight() {
        this.objetctPositionX += 5;
    }


    moveLeft(array) {
        this.objetctPositionX -= 5;

    }

    moveAnimation() {

    }
}
