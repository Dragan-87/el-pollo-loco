class Character extends MoveableObject {
    world;

    IDLE_IMAGES = [
        "img/2_character_pepe/1_idle/idle/I-1.png",
        "img/2_character_pepe/1_idle/idle/I-2.png",
        "img/2_character_pepe/1_idle/idle/I-3.png",
        "img/2_character_pepe/1_idle/idle/I-4.png",
        "img/2_character_pepe/1_idle/idle/I-5.png",
        "img/2_character_pepe/1_idle/idle/I-6.png",
        "img/2_character_pepe/1_idle/idle/I-7.png",
        "img/2_character_pepe/1_idle/idle/I-8.png",
        "img/2_character_pepe/1_idle/idle/I-9.png",
    ]

    LONG_IDLE_IMAGES = [
        "img/2_character_pepe/1_idle/long_idle/I-11.png",
        "img/2_character_pepe/1_idle/long_idle/I-12.png",
        "img/2_character_pepe/1_idle/long_idle/I-13.png",
        "img/2_character_pepe/1_idle/long_idle/I-14.png",
        "img/2_character_pepe/1_idle/long_idle/I-15.png",
        "img/2_character_pepe/1_idle/long_idle/I-16.png",
        "img/2_character_pepe/1_idle/long_idle/I-17.png",
        "img/2_character_pepe/1_idle/long_idle/I-18.png",
        "img/2_character_pepe/1_idle/long_idle/I-19.png",
        "img/2_character_pepe/1_idle/long_idle/I-20.png"
    ]

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

    DEAD_IMAGES = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',
    ]

    HURT_IMAGES = [
        "img/2_character_pepe/4_hurt/H-41.png",
        "img/2_character_pepe/4_hurt/H-42.png",
        "img/2_character_pepe/4_hurt/H-43.png",
    ]

    constructor(img) {
        super(img);
        this.objetctPositionY = 480 - 210;
        this.objetctPositionX = 10;
        this.speed = 5;
        this.energy = 100;
        this.loadImages(this.WALK_IMAGES);
        this.loadImages(this.JUMP_IMAGES);
        this.loadImages(this.DEAD_IMAGES);
        this.loadImages(this.HURT_IMAGES);
        this.loadImages(this.IDLE_IMAGES);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {

            this.world.walkingSound.pause();
            if (this.world.keyboard.RIGHT && this.objetctPositionX < this.world.level.levelEndX) {
                this.playWalkingSound();
                this.moveRight();

            }
            if (this.world.keyboard.LEFT && this.objetctPositionX > 0) {
                this.playWalkingSound();
                this.moveLeft();
                this.otherDirection = true;
            }

            if (this.world.keyboard.JUMP && !this.isAboveGround()) {
                this.jump();
            }


            this.world.camera_x = -this.objetctPositionX
        }, 1000 / 60);


        setInterval(() => {


            if (this.isDead()) {
                this.playAnimation(this.DEAD_IMAGES)
                return;
            } else if (this.isHurt()) {
                this.playAnimation(this.HURT_IMAGES);
                return;
            }
            if (this.isAboveGround()) {
                this.playAnimation(this.JUMP_IMAGES);
            }
            else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.WALK_IMAGES);
            } else {
                this.img = this.imageCache[this.WALK_IMAGES[0]];
            }
            if (this.characterWait()) {
                this.playAnimation(this.IDLE_IMAGES);
            }

        }, 100);
    }

    jump() {
        this.speedY = 15;
    }

    characterWait() {
        if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && !this.isAboveGround()) {
            return true;
        }
    }

    playWalkingSound() {
        if(!this.isAboveGround()){
            this.world.walkingSound.play();
        }
    }

}
