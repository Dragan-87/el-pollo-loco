class Character extends MoveableObject {


    constructor(objetctPositionX, objetctPositionY, img) {
        super(objetctPositionX, objetctPositionY, img);
    }

    moveRight(x, y) {
        this.objetctPositionX += x;
        this.objetctPositionY += y;
    }

    jump() {
        this.objetctPositionY -= 50;
    }
}
