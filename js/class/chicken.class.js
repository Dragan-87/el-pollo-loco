class Chicken extends MoveableObject {
    constructor(objetctPositionX, objetctPositionY, img) {
        super(objetctPositionX, objetctPositionY, img);
        this.height = 40;
        this.width = 40;
        this.objetctPositionX = 200 + Math.random() * 500;
        this.objetctPositionY = 480 - this.height;
    }

    eat() {
        this.objetctPositionY -= 50;
    }
}
