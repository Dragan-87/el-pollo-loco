class Character extends MoveableObject {
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
        this.objetctPositionY = 480 - 205;
        this.objetctPositionX = 50;
        this.speed = 5;
        this.loadImages(this.WALK_IMAGES);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT) {
                this.moveLeft();
                this.otherDirection = true;
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {

                let i = this.currentImage % this.WALK_IMAGES.length;
                let path = this.WALK_IMAGES[i];
                this.img = this.imageCache[path];
                this.currentImage++
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

    animationInterval() {
        let i = this.currentImage % this.WALK_IMAGES.length;
        let path = this.WALK_IMAGES[i];
        this.img = this.imageCache[path];
        this.currentImage
    }
}
