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
    healthBar = new Healthbar();
    salsabar = new Salsabar();
    coinBar = new Coinbar();
    throwableObjects = [];
    salsaBottles = [new Bottle(100), new Bottle(200), new Bottle(300), new Bottle(400), new Bottle(500)];


    /**
     * Represents a World object.
     * @constructor
     * @param {HTMLCanvasElement} canves - The canvas element.
     * @param {Keyboard} keyboard - The keyboard object.
     */
    constructor(canves, keyboard) {
        this.canves = canves;
        this.keyboard = keyboard;
        this.ctx = canves.getContext('2d');
        this.draw();
        this.setWorld()
        this.run();
        this.deleteDeadEnemy();
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
        }, 200);

        setInterval(() => {
            this.checkThrowObjects();
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

    checkJumpOnHead() {
        this.enemies.forEach((enemy) => {
            if (this.character.isJumpingOnHead(enemy) && enemy.energy < 100) {
                console.log('jumped on head');
                    enemy.energy -= 20;
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
                } else if (collectable instanceof Bottle && this.character.bottles < 100) {
                    this.character.bottles += 20;
                    this.salsabar.statusBarPercentage(this.salsabar, this.character.bottles);
                    this.salsaBottles.splice(this.salsaBottles.indexOf(collectable), 1);

                }
            }

        })
    }

    /**
     * Draws the game world on the canvas.
     */
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
        this.addToGameMap(this.salsabar);
        this.addToGameMap(this.coinBar);
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

    addToGameMap(mvO) {
        if (mvO.otherDirection) {
            this.flippingImage(mvO);
        } else {
            this.normalImage(mvO);
        }
        // this.drawColision(mvO);
        // this.drawColisionOffSet(mvO);
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
                }
            })
        }, 100);
    }

    /**
     * Deletes dead enemies from the enemies array at regular intervals.
     */
    deleteDeadEnemy() {
        setInterval(() => {
            this.enemies.forEach(enemy => {
                if (enemy.isSpliceable) {
                    this.enemies.splice(this.enemies.indexOf(enemy), 1);
                }
            })
        }, 1000);
    }
}
