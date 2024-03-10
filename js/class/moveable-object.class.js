class MoveableObject {
    objetctPositionX;
    objetctPositionY;
    img;
    height = 80;
    width = 60;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    constructor(objetctPositionX, objetctPositionY, img) {
        this.objetctPositionX = objetctPositionX;
        this.objetctPositionY = objetctPositionY;
        this.loadImage(img);
    }

    moveRight(x, ) {
        this.objetctPositionX += x;
    }

    moveLeft(x) {
        this.objetctPositionX -= x;
    }

    moveAnimation() {
        
    }
}
