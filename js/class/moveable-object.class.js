class MoveableObject {
    objetctPositionX;
    objetctPositionY;
    img;
    height = 100;
    width = 80;
    img = new Image();

    loadImage(path) {
        this.img.src = path;
    }

    constructor(img) {
        this.loadImage(img);
    }

    moveRight(x) {
        this.objetctPositionX += x;
    }

    moveLeft(x) {
        this.objetctPositionX -= x;
    }

    moveAnimation() {
        
    }
}
