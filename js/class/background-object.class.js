class BackgroundObject extends MoveableObject {
    objetctPositionX = 0;
    objetctPositionY = 0;

    constructor(imagePath, objetctPositionX, objetctPositionY) {
        super(imagePath);
        this.objetctPositionX = objetctPositionX;
        this.objetctPositionY = objetctPositionY;
    }

    moveAnimation() {
        this.objetctPositionX -= 1;
        if (this.objetctPositionX === -400) {
            this.objetctPositionX = 0;
        }
    }
}
