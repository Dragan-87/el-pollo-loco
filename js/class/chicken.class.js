class Chicken extends MoveableObject {
    constructor(objetctPositionX, objetctPositionY, img) {
        super(objetctPositionX, objetctPositionY, img);
        this.objetctPositionX = 200
    }

    eat() {
        this.objetctPositionY -= 50;
    }
}
