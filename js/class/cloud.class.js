class Cloud extends MoveableObject {
    constructor(img) {
        super(img);
        this.objetctPositionX = Math.random() * 400;
        this.objetctPositionY = 0;
        this.height = 220;
        this.width = 400;
        this.animate();
        this.speed = 0.15
    }

    animate() {
        this.moveLeft();
    }

    
}
