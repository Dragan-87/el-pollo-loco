class Character extends MoveableObject {
    speedY = 0;
    speedX = 0;

    world;

    WALK_IMAGES = [
        "./img/2_character_pepe/2_walk/W-21.png",
        "./img/2_character_pepe/2_walk/W-22.png",
        "./img/2_character_pepe/2_walk/W-23.png",
        "./img/2_character_pepe/2_walk/W-24.png",
        "./img/2_character_pepe/2_walk/W-25.png",
        "./img/2_character_pepe/2_walk/W-26.png",
    ]

    constructor(img) {
        super(img);
        this.objetctPositionY = 480 - 300; //205
        this.objetctPositionX = 0;
        this.speed = 5;
        this.loadImages(this.WALK_IMAGES);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.world.walkingSound.pause();
            if (this.world.keyboard.RIGHT && this.objetctPositionX < this.world.level.levelEndX) {
                this.world.walkingSound.play();
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.objetctPositionX > 0) {
                this.world.walkingSound.play();
                this.moveLeft();
                this.otherDirection = true;
            }
            this.world.camera_x = -this.objetctPositionX
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.WALK_IMAGES);
            }
        }, 100);
    }

    jump() {
        this.objetctPositionY -= 50;
        setTimeout(() => {
            this.objetctPositionY += 50;
        }, 500);
    }

    moveLeft() {
        this.objetctPositionX -= this.speed;
    }
}
