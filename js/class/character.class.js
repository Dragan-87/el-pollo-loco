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

    getHitSound = new Audio("./audio/pepe/pepe-get-dmg.mp3");
    jumpingSound = new Audio("./audio/pepe/pepe-jump.mp3");
    sleepSound = new Audio("./audio/pepe/pepe-sleep.mp3"); // "./audio/pepe/pepe-sleep.mp3" nervt beim coden
    walkingSound = new Audio("./audio/pepe/walking-short.mp3");

    constructor() {
        super("img/2_character_pepe/1_idle/idle/I-1.png");
        this.objetctPositionY = 480 - this.height - 50;
        this.objetctPositionX = 10;
        this.speed = 5;
        this.speedY = 20;
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

    isWaitingShort() {
        return !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && !this.isAboveGround()
    }

    playWalkingSound() {
        if (!this.isAboveGround()) {
            this.walkingSound.play();
        }
    }

    isWalking() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT
    }

    isWaitingLong() {
        return (this.currentTime >= this.waitingTime + 5 * 1000)
    }

    // isJumpingOnHead(obj) {
    //     return this.objetctPositionY + this.height - this.offSet.top <= obj.objetctPositionY + obj.height &&
    //         this.objetctPositionY + this.height - this.offSet.bottom < obj.objetctPositionY + obj.height - obj.offSet.bottom &&
    //         this.objetctPositionX + this.width - this.offSet.left > obj.objetctPositionX + obj.width -obj.offSet.right
    // }

    canCharacterMove() {
        this.walkingSound.pause();
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
            this.jumpingSound.play();
            this.jump();
        }
        this.world.camera_x = -this.objetctPositionX
    }

    playCharaterAnimation() {
        if (this.isDead()) {
            this.playAnimation(this.DEAD_IMAGES)
            gameOver();
            if(!this.deadFall){
                this.deadFall = true;
                this.jump();
            }
            clearAllIntervals();
            return;
        } else if (this.isHurt()) {
            this.playAnimation(this.HURT_IMAGES);
            this.getHitSound.play();
            return;
        }else if (this.isAboveGround() && !this.isDead()){
            this.playAnimation(this.JUMP_IMAGES);
        } else if (this.isWalking()) {
            this.playAnimation(this.WALK_IMAGES);
        } else {
            this.img = this.imageCache[this.WALK_IMAGES[0]];
        }
        this.playIdleAnimation();
    }

    isKeyPushed() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.JUMP || this.world.keyboard.THROW;
    }

    resetWatingTime() {
        this.waitingTime = null;
        this.currentTime = null;
        this.stopSleepingSound();
    }

    stopSleepingSound() {
        this.sleepSound.pause();
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
     * Plays the idle animation based on the character's waiting time and key push status.
     */
    playIdleAnimation() {
        if (this.isWaitingShort()) {
            this.playShortIdleAnimation();
        }
        if (this.isWaitingLong()) {
            this.playAnimation(this.LONG_IDLE_IMAGES);
            this.sleepSound.play();
        }
        if (this.isKeyPushed()) {
            this.resetWatingTime();
        }
    }

}
