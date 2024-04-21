class Character extends MoveableObject {
    world;
    deadFall = false;
    currentTime;
    waitingTime;
    coins = 0;
    bottles = 0;

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

    constructor() {
        super("img/2_character_pepe/1_idle/idle/I-1.png");
        this.objetctPositionY = 480 - this.height - 50;
        this.objetctPositionX = 10;
        this.speed = 5;
        this.energy = 100;
        this.offSet.left = 10;
        this.offSet.right = 15;
        this.offSet.top = 10;
        this.offSet.bottom = 60;
        this.acceleration = 2;
        this.dealDamage = 20;
        this.loadImages(this.WALK_IMAGES);
        this.loadImages(this.JUMP_IMAGES);
        this.loadImages(this.DEAD_IMAGES);
        this.loadImages(this.HURT_IMAGES);
        this.loadImages(this.IDLE_IMAGES);
        this.loadImages(this.LONG_IDLE_IMAGES)
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => this.canCharacterMove(), 1000 / 60);
        setInterval(() => this.playCharaterAnimation(), 100);
    }

    isWaitingLong() {
        return (this.currentTime >= (this.waitingTime + (9 * 1000)))
    }


    isJumping() {
        return this.isAboveGround() && !this.isDead()
    }

    isWaitingShort() {
        return !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && !this.isAboveGround()
    }

    playWalkingSound() {
        if (!this.isAboveGround()) {
            pepeWalkingSound.play();
        }
    }

    isWalking() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT
    }


    isKeyPushed() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.JUMP || this.world.keyboard.THROW;
    }

    /**
     * Plays the idle animation for the Short character.
     */
    playShortIdleAnimation() {
        this.playAnimation(this.IDLE_IMAGES);
        this.currentTime = new Date().getTime();
        if (!this.waitingTime) {
            this.waitingTime = this.currentTime;
        }
    }


    /**
     * Determines if the character can move based on keyboard input and current position.
     */
    canCharacterMove() {
        pepeWalkingSound.pause();
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
            pepeJumpSound.play();
            this.jump();
        }
        this.world.camera_x = -this.objetctPositionX
    }

    /**
     * Plays the character animation based on its current state.
     */
    playCharaterAnimation() {
        if (this.isDead()) {
            this.playAnimation(this.DEAD_IMAGES)
            this.resetWatingTime();
            return;
        }

        if (this.isHurt()) {
            pepeHurtsSound.play();
            this.playAnimation(this.HURT_IMAGES);
            this.resetWatingTime();
            return;
        }

        if (this.isJumping()) {
            this.playAnimation(this.JUMP_IMAGES);
            this.resetWatingTime();

        } else if (this.isWalking()) {
            this.playAnimation(this.WALK_IMAGES);
            this.resetWatingTime();

        }


        if (this.isWaitingShort()) {
            this.playShortIdleAnimation();
        }

        if (this.isWaitingLong()) {
            this.playAnimation(this.LONG_IDLE_IMAGES);
            pepeSleepSound.play();
        }
    }

    /**
     * Resets the waiting time and current time of the character.
     * Also stops the sleeping sound.
     */
    resetWatingTime() {
        this.waitingTime = null;
        this.currentTime = null;
        this.stopSleepingSound();
    }

    /**
     * Stops the sleeping sound.
     */
    stopSleepingSound() {
        pepeHurtsSound.pause();
    }

}
