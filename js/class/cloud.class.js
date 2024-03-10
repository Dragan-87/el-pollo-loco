class Cloud extends MoveableObject {
    constructor(img) {
        super(img);
        this.objetctPositionX = Math.random() * 100;
        this.objetctPositionY = 0;
        this.height = 100;
        this.width = 290;
    }
}
