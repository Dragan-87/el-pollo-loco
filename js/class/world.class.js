class World {
    character = new Character("./img/2_character_pepe/2_walk/W-21.png");
    level = level1;
    enemies = level1.enemies
    coin = level1.coin;
    clouds = level1.clouds;
    worldBackgroundLayerOne = level1.worldBackgroundLayerOne;
    air = level1.air;
    gameOverBackGround = level1.gameOverBackGround;
    canves;
    ctx;
    keyboard;
    camera_x = 0;
    gameOverScreen = new EndScreen();
    salsaBottle = new Bottle(150);
    healthBar = new Healthbar();
    salsabar = new Salsabar();
    coinBar = new Coinbar();
    throwableObjects = [];
    salsaBottles = level1.bottles;
    endbossHealthbar = new EndbossHealthbar();
    isBossFightStarting = false;

    // backgroundMusic = new Audio("audio/background-music/background-music-2.mp3");


    /**
     * Represents a World object.
     * @constructor
     * @param {HTMLCanvasElement} canves - The canvas element.
     */
    constructor(canves, keyboard) {
        // this.backgroundMusic.volume = 0.1;
        // this.backgroundMusic.play();
        this.canves = canves;
        this.keyboard = keyboard;
        this.ctx = canves.getContext('2d');
        this.draw();
        this.setWorld()
        this.run();

    }

    /**
     * Sets the world for the character.
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Runs the game loop.
     * Executes the checkCollision and checkThrowObjects methods repeatedly at a fixed interval.
     */
    run() {
        setInterval(() => {
            this.checkJumpOnHead();
            this.checkCollision();
            this.checkCollection(this.coin);
            this.checkCollection(this.salsaBottles);
            this.checkCharacterAndBossPosition()
            if (this.character.isDead()) {
                this.gameOver();
            }
        }, 200);

        setInterval(() => {
            this.checkThrowObjects();
            this.deleteDeadEnemy();
        }, 100);
    }

    /**
     * Checks for collision between the character and enemies, and performs necessary actions.
     */
    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && enemy.energy > 0) {
                this.character.hit(enemy.dealDamage);
                this.healthBar.statusBarPercentage(this.healthBar, this.character.energy);
                if (this.character.energy <= 0) {
                    this.character.energy = 0;
                    this.healthBar.statusBarPercentage(this.healthBar, this.character.energy);
                }
            }
        });
    }

    /**
     * Checks if the character is jumping on an enemy's head and performs the necessary actions.
     */
    checkJumpOnHead() {
        this.enemies.forEach((enemy) => {
            if (this.character.isJumpingOnHead(enemy) && !(enemy instanceof Endboss)) {
                enemy.hit(this.character.dealDamage);
                this.character.jump();
                this.character.jumpingSound.play();
            }
        });
    }

    /**
     * Checks if the character is colliding with any collectables and collects them if so.
     * @param {Array} obj - The array of collectables to check.
     */
    checkCollection(obj) {
        obj.forEach((collectable) => {
            if (this.character.isColliding(collectable)) {
                if (collectable instanceof Coin && this.character.coins < 100) {
                    this.colletCoins(collectable);
                    collectable.coinSound.volume = 0.3;
                    collectable.coinSound.play();
                } else if (collectable instanceof Bottle && this.character.bottles < 100) {
                    this.character.bottles += 20;
                    this.salsabar.statusBarPercentage(this.salsabar, this.character.bottles);
                    this.salsaBottle.getBottleSound.play();
                    this.salsaBottles.splice(this.salsaBottles.indexOf(collectable), 1);
                }
            }
        })
    }

    /**
     * Draws the game world on the canvas.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canves.width, this.canves.height);
        this.ctx.translate(this.camera_x, 0);
        requestAnimationFrame(() => this.draw());
        this.addObjectsToGameMap(this.air)
        this.addObjectsToGameMap(this.clouds);

        this.ctx.translate(-this.camera_x, 0);
        // Space for fixed objects
        this.addToGameMap(this.healthBar);
        this.addToGameMap(this.salsabar);
        this.addToGameMap(this.coinBar);
        this.addToGameMap(this.endbossHealthbar);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToGameMap(this.worldBackgroundLayerOne);
        this.addObjectsToGameMap(this.coin);
        this.addObjectsToGameMap(this.salsaBottles);
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

    /**
     * Adds the given object to the game map.
     * If the object has `otherDirection` property set to true, it calls `flippingImage` method.
     * Otherwise, it calls `normalImage` method.
     *
     * @param {Object} mvO - The object to be added to the game map.
     */
    addToGameMap(mvO) {
        if (mvO.otherDirection) {
            this.flippingImage(mvO);
        } else {
            this.normalImage(mvO);
        }
    }

    /**
     * Draws the collision rectangle for the given movable object.
     * @param {MovableObject} mvO - The movable object to draw the collision rectangle for.
     */
    drawColision(mvO) {
        if (mvO instanceof Character || mvO instanceof Chicken || mvO instanceof Endboss || mvO instanceof ThrowableObject) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '5';
            this.ctx.strokeStyle = 'blue';
            this.ctx.rect(mvO.objetctPositionX, mvO.objetctPositionY, mvO.width, mvO.height);
            this.ctx.stroke();
        }
    };

    /**
     * Draws the collision offset of a movable object.
     * @param {MovableObject} mvO - The movable object to draw the collision offset for.
     */
    drawColisionOffSet(mvO) {
        if (mvO instanceof Character || mvO instanceof Chicken || mvO instanceof Endboss || mvO instanceof ThrowableObject || mvO instanceof CollectableItem) {
            this.ctx.beginPath();
            this.ctx.lineWidth = '5';
            this.ctx.strokeStyle = 'red';
            this.ctx.rect(
                (mvO.objetctPositionX + mvO.offSet.left),
                (mvO.objetctPositionY + mvO.offSet.bottom),
                (mvO.width - mvO.offSet.left - mvO.offSet.right),
                (mvO.height - mvO.offSet.top - mvO.offSet.bottom)
            );
            this.ctx.stroke();
        }
    };

    /**
     * Flips and draws an image on the canvas.
     * @param {Object} mvO - The image object containing properties like img, objectPositionX, width, height, etc.
     */
    flippingImage(mvO) {
        this.ctx.save();
        this.ctx.scale(-1, 1);
        this.ctx.drawImage(mvO.img, -mvO.objetctPositionX - mvO.width, mvO.objetctPositionY, mvO.width, mvO.height);
        this.ctx.restore();
        return;
    }

    /**
     * Draws the image on the canvas using the provided parameters.
     *
     * @param {Object} mvO - The object containing the image and its position.
     * @param {HTMLImageElement} mvO.img - The image to be drawn.
     * @param {number} mvO.objetctPositionX - The x-coordinate of the image's position.
     * @param {number} mvO.objetctPositionY - The y-coordinate of the image's position.
     * @param {number} mvO.width - The width of the image.
     * @param {number} mvO.height - The height of the image.
     */
    normalImage(mvO) {
        this.ctx.drawImage(mvO.img, mvO.objetctPositionX, mvO.objetctPositionY, mvO.width, mvO.height);
    }


    /**
     * Checks if the throw key is pressed and the character has bottles to throw.
     * If conditions are met, reduces the number of bottles, creates a new throwable object,
     * adds it to the list of throwable objects, updates the status bar, and removes the object after 3 seconds.
     */
    checkThrowObjects() {
        if (this.keyboard.THROW && this.character.bottles > 0) {
            this.character.bottles -= 20;
            let bottle = new ThrowableObject("./img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png", this.character.objetctPositionX, this.character.objetctPositionY);
            this.throwableObjects.push(bottle);
            this.salsabar.statusBarPercentage(this.salsabar, this.character.bottles);
            this.throwingObjectHitEnemy(bottle);
            setTimeout(() => {
                this.throwableObjects.splice(this.throwableObjects.indexOf(bottle), 1);
            }, 3000);
        }
    }

    /**
     * Collects coins and updates the character's coin count.
     * @param {Object} obj - The coin object to be collected.
     */
    colletCoins(obj) {
        this.character.coins += 20;
        this.coinBar.statusBarPercentage(this.coinBar, this.character.coins);
        this.coin.splice(this.coin.indexOf(obj), 1);
    }

    /**
     * Handles the collision between a throwing object and enemies.
     * Reduces the energy of enemies if a collision occurs.
     * @param {ThrowingObject} throwingObject - The throwing object that collided with enemies.
     */
    throwingObjectHitEnemy(throwingObject) {
        setInterval(() => {
            this.enemies.forEach(enemy => {
                if (throwingObject.isColliding(enemy)) {
                    throwingObject.throwableObjectHitsEnemy(enemy);
                    if (enemy instanceof Endboss) {
                        this.endbossHealthbar.statusBarPercentage(this.endbossHealthbar, enemy.energy);
                    }
                }
            })
        }, 100);

    }

    /**
     * Deletes dead enemies from the enemies array at regular intervals.
     */
    deleteDeadEnemy() {
        this.enemies.forEach(enemy => {
            if (enemy.isSpliceable) {
                this.enemies.splice(this.enemies.indexOf(enemy), 1);
            }
        })
    }

    /**
     * Checks the position of the character and the boss in the game world.
     */
    checkCharacterAndBossPosition() {
        this.enemies.forEach(enemy => {
            if (enemy instanceof Endboss) {
                enemy.charachterPositionX = this.character.objetctPositionX;
                if (this.character.objetctPositionX > enemy.objetctPositionX - 600) {
                    this.endbossHealthbar.objetctPositionY = 10;
                    if (!this.isBossFightStarting) {
                        enemy.startBossAttack();
                        this.isBossFightStarting = true;
                    }
                }
            }
        })
    };

    /**
     * Displays the game over screen and clears all intervals after a delay.
     */
    gameOver() {
        showGameOverScreen();
        setTimeout(() => {
            clearAllIntervals();
        }, 1000);
    }

}
