class MoveableObject {
    objetctPositionX;
    objetctPositionY;
    img;
    height = 150;
    width = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    constructor(objetctPositionX, objetctPositionY, img) {
        this.objetctPositionX = objetctPositionX;
        this.objetctPositionY = objetctPositionY;
        this.loadImage(img);
    }

    moveRight(x, y) {
        this.objetctPositionX += x;
        this.objetctPositionY += y;
    }
}
