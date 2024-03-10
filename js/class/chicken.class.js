class Chicken extends MoveableObject {
    constructor(objetctPositionX, objetctPositionY, img) {
        super(objetctPositionX, objetctPositionY, img);
    }

    eat() {
        this.objetctPositionY -= 50;
    }
}
