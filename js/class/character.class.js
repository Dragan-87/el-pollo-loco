class Character extends MoveableObject {
    constructor(objetctPositionX, objetctPositionY, img) {
        super(objetctPositionX, objetctPositionY, img);
    }

    jump() {
        this.objetctPositionY -= 50;
    }
}
