class World {
    character = new Character("./img/2_character_pepe/2_walk/W-21.png");
    level = level1;
    enemies = level1.enemies;
    clouds = level1.clouds;
    worldBackgroundLayerOne = level1.worldBackgroundLayerOne;
    air = level1.air;
    gameOverBackGround = level1.gameOverBackGround;
    canves;
    ctx;
    keyboard;
    camera_x = 0;
    walkingSound = new Audio("./audio/walking-short.mp3");
    healthBar = new Satusbar("img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png", 10, 10);
    bottleBar = new Satusbar("img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png", 10, 50);
    coinBar = new Satusbar("img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png", 10, 90);
    throwableObjects = [
        new ThrowableObject("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png", 100),

    ];


    constructor(canves, keyboard) {
        this.canves = canves;
        this.keyboard = keyboard;
        this.ctx = canves.getContext('2d');
        this.draw();
        this.setWorld()
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollision();
            this.checkThrowObjects();
        }, 200);
    }

    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit(enemy.dealDamage,);
                this.character.statusBarPercentage(this.character.energy);
                if (this.character.energy <= 0) {
                    this.character.energy = 0;
                    this.character.statusBarPercentage(this.character.energy);
                }
            }
        });
    }

    draw() {
        canves.height = 480;
        canves.width = 720;
        this.ctx.clearRect(0, 0, this.canves.width, this.canves.height);
        this.ctx.translate(this.camera_x, 0);
        requestAnimationFrame(() => this.draw());
        this.addObjectsToGameMap(this.air)
        this.addObjectsToGameMap(this.clouds);

        this.ctx.translate(-this.camera_x, 0);
        // Space for fixed objects
        this.addToGameMap(this.healthBar);
        this.addToGameMap(this.bottleBar);
        this.addToGameMap(this.coinBar);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToGameMap(this.worldBackgroundLayerOne);
        this.addObjectsToGameMap(this.enemies);
        this.addToGameMap(this.character);
        this.addObjectsToGameMap(this.throwableObjects)
        this.ctx.translate(-this.camera_x, 0);
    }

    /**
     * Adds objects to the game map.
     * @param {Array} objects - The objects to be added to the game map.
     */
    addObjectsToGameMap(objects) {
        objects.forEach(object => {
            this.addToGameMap(object)
        });
    }

    addToGameMap(mvO) {
        if (mvO.otherDirection) {
            this.flippingImage(mvO);
        } else {
            this.normalImage(mvO);
        }
        this.drawColision(mvO);
    }

    drawColision(mvO) {
        if (mvO instanceof Character || mvO instanceof Chicken || mvO instanceof Endboss || mvO instanceof ThrowableObject) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '5';
            this.ctx.strokeStyle = 'red';
            this.ctx.rect(mvO.objetctPositionX, mvO.objetctPositionY, mvO.width, mvO.height);
            this.ctx.stroke();
        }
    };

    flippingImage(mvO) {
        this.ctx.save();
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(mvO.img, -mvO.objetctPositionX - mvO.width, mvO.objetctPositionY, mvO.width, mvO.height);
        this.ctx.restore();
        return;
    }

    normalImage(mvO) {
        this.ctx.drawImage(mvO.img, mvO.objetctPositionX, mvO.objetctPositionY, mvO.width, mvO.height);
    }

    checkThrowObjects() {
        if (this.keyboard.THROW) {
            let bottle = new ThrowableObject("img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png", this.character.objetctPositionX, this.character.objetctPositionY);
            this.throwableObjects.push(bottle);
        }
    }
}
