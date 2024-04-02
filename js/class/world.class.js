class World {
    character = new Character("./img/2_character_pepe/2_walk/W-21.png");
    level = level1;
    enemies = level1.enemies;
    clouds = level1.clouds;
    worldBackgroundLayerOne = level1.worldBackgroundLayerOne;
    air = level1.air;
    canves;
    ctx;
    keyboard;
    camera_x = 0;
    walkingSound = new Audio("./audio/walking-short.mp3");



    constructor(canves, keyboard) {
        this.canves = canves;
        this.keyboard = keyboard;
        this.ctx = canves.getContext('2d');
        this.draw();
        this.setWorld()
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        canves.height = 480;
        canves.width = 720;
        this.ctx.clearRect(0, 0, this.canves.width, this.canves.height);
        this.ctx.translate(this.camera_x, 0);
        requestAnimationFrame(() => this.draw());
        this.addObjectsToGameMap(this.air)
        this.addObjectsToGameMap(this.clouds);
        this.addObjectsToGameMap(this.worldBackgroundLayerOne);
        this.addObjectsToGameMap(this.enemies);
        this.drwaMultipleCoision(this.enemies);
        this.addToGameMap(this.character);
        this.drawColision(this.character)
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
     * Adds a moveable object to the game map.
     *
     * @param {Object} mvO - The moveable object to be added.
     * @param {Image} mvO.img - The image of the moveable object.
     * @param {number} mvO.objetctPositionX - The X position of the moveable object.
     * @param {number} mvO.objetctPositionY - The Y position of the moveable object.
     * @param {number} mvO.width - The width of the moveable object.
     * @param {number} mvO.height - The height of the moveable object.
     */
    addToGameMap(mvO) {
        if (mvO.otherDirection) {
            this.ctx.save();
            this.ctx.scale(-1, 1);
            this.ctx.drawImage(mvO.img, -mvO.objetctPositionX - mvO.width, mvO.objetctPositionY, mvO.width, mvO.height);
            this.ctx.restore();
            return;
        }
        this.ctx.drawImage(mvO.img, mvO.objetctPositionX, mvO.objetctPositionY, mvO.width, mvO.height);

    }

    drwaMultipleCoision(objects) {
        objects.forEach(object => {
            this.drawColision(object)
        });
    }

    drawColision(mvO) {
        this.ctx.beginPath();
        this.ctx.lineWidth = '5';
        this.ctx.strokeStyle = 'red';
        this.ctx.rect(mvO.objetctPositionX, mvO.objetctPositionY, mvO.width, mvO.height);
        this.ctx.stroke();
    };
}
