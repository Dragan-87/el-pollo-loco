class BackgroundObject extends MoveableObject {
    objetctPositionX = 0;
    objetctPositionY = 0;
    height = 480;
    width = 720;


    constructor(imagePath, objetctPositionX) {
        super(imagePath);
        this.objetctPositionX = objetctPositionX;
        this.objetctPositionY = 480 - this.height;
    }

    /**
     * Moves the background object by updating its position.
     */
    moveAnimation() {
        this.objetctPositionX -= 1;
        if (this.objetctPositionX === -400) {
            this.objetctPositionX = 0;
        }
    }
}
