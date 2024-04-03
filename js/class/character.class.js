class Character extends MoveableObject {
    speedX = 0;

    world;

    WALK_IMAGES = [
        './img/2_character_pepe/2_walk/W-21.png',
        './img/2_character_pepe/2_walk/W-22.png',
        './img/2_character_pepe/2_walk/W-23.png',
        './img/2_character_pepe/2_walk/W-24.png',
        './img/2_character_pepe/2_walk/W-25.png',
        './img/2_character_pepe/2_walk/W-26.png',
    ]

    JUMP_IMAGES = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ]

    constructor(img) {
        super(img);
        this.objetctPositionY = 480 - 210;
        this.objetctPositionX = 0;
        this.speed = 5;
        this.loadImages(this.WALK_IMAGES);
        this.loadImages(this.JUMP_IMAGES);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.world.walkingSound.pause();

            if (this.world.keyboard.RIGHT && this.objetctPositionX < this.world.level.levelEndX) {
                this.moveRight();
                this.world.walkingSound.play();

            }

            if (this.world.keyboard.LEFT && this.objetctPositionX > 0) {
                this.world.walkingSound.play();
                this.moveLeft();
                this.otherDirection = true;

            }

            if (this.world.keyboard.JUMP && !this.isAboveGround() ) {
                this.jump();
            }

            this.world.camera_x = -this.objetctPositionX
        }, 1000 / 60);

        setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.JUMP_IMAGES);
            }
            else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.WALK_IMAGES);
            } else {
                this.img = this.imageCache[this.WALK_IMAGES[0]];
            }
        }, 100);

    }

    jump() {
        this.speedY = 15;
    }


}
