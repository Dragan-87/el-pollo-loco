class Cloud extends MoveableObject {


    constructor(img, x) {
        super(img, x);
        this.objetctPositionY = 0;
        this.height = 220;
        this.width = 400;
        this.animate();
        this.speed = 0.15
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }



}
