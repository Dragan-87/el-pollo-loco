class MoveableObject {
    objetctPositionX;
    objetctPositionY;
    img;

    constructor(objetctPositionX, objetctPositionY, img) {
        this.objetctPositionX = objetctPositionX;
        this.objetctPositionY = objetctPositionY;
        this.img = img;
    }

    moveRight(x, y) {
        this.objetctPositionX += x;
        this.objetctPositionY += y;
    }
}
