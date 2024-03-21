class World {
    character = new Character("../../img/2_character_pepe/2_walk/W-21.png");
    enemies = [
        new Chicken("../../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png"),
        new Chicken("../../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png"),
        new Chicken("../../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png"),
    ];
    clouds = [
        new Cloud("../../img/5_background/layers/4_clouds/1.png"),
        new Cloud("../../img/5_background/layers/4_clouds/2.png"),
        new Cloud("../../img/5_background/layers/4_clouds/2.png"),
    ]
    canves;
    ctx;
    worldBackgroundLayerOne = [
        new BackgroundObject("../../img/5_background/layers/3_third_layer/1.png", 0, -50),
        new BackgroundObject("../../img/5_background/layers/2_second_layer/1.png", 0, -50),
        new BackgroundObject("../../img/5_background/layers/1_first_layer/1.png", 0, -50),
    ]

    constructor(canves) {
        this.canves = canves;
        this.ctx = canves.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canves.width, this.canves.height);
        requestAnimationFrame(() => this.draw());

        this.addObjectsToGameMap(this.clouds);
        this.addObjectsToGameMap(this.worldBackgroundLayerOne);
        this.addObjectsToGameMap(this.enemies);
        this.addToGameMap(this.character);

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
     * @param {Object} moveableObject - The moveable object to be added.
     * @param {Image} moveableObject.img - The image of the moveable object.
     * @param {number} moveableObject.objetctPositionX - The X position of the moveable object.
     * @param {number} moveableObject.objetctPositionY - The Y position of the moveable object.
     * @param {number} moveableObject.width - The width of the moveable object.
     * @param {number} moveableObject.height - The height of the moveable object.
     */
    addToGameMap(moveableObject) {
        this.ctx.drawImage(moveableObject.img, moveableObject.objetctPositionX, moveableObject.objetctPositionY, moveableObject.width, moveableObject.height);
    }
}
