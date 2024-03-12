class Chicken extends MoveableObject {
    constructor(objetctPositionX, objetctPositionY, img) {
        super(objetctPositionX, objetctPositionY, img);
        this.objetctPositionX = 200 + Math.random() * 500;
        this.objetctPositionY = 115;
        this.height = 30;
        this.width = 30;
    }

    eat() {
        this.objetctPositionY -= 50;
    }
}
