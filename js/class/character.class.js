class Character extends MoveableObject {

    constructor(img) {
        super(img);
        this.objetctPositionX = 50;
        this.objetctPositionY = 65;
    }

    jump() {
        this.objetctPositionY -= 50;
        setTimeout(() => {
            this.objetctPositionY += 50;
        }, 500);
    }

    checkPosition() {
        if (this.objetctPositionX > 290) {
            this.objetctPositionX = -20;
        }
    }

}
