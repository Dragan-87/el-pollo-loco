class Character extends MoveableObject {
    constructor(objetctPositionX, objetctPositionY, img) {
        super(objetctPositionX, objetctPositionY, img);
    }

    jump() {
        this.objetctPositionY -= 50;
        setTimeout(() => {
            this.objetctPositionY += 50;
        }, 500);
    }
}
