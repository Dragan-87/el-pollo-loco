class Level {
    clouds;
    worldBackgroundLayerOne;
    air;
    levelEndX = 470 * 3;
    gameOverBackground;
    coins;
    coin = [];
    clouds = [];
    enemies = [];
    bottles = [];

    constructor(worldBackgroundLayerOne, air, gameOverBackground) {
        this.worldBackgroundLayerOne = worldBackgroundLayerOne;
        this.air = air;
        this.gameOverBackground = gameOverBackground;
        this.coinFactory();
        this.cloudFactory();
        this.chickenFactory();
        this.bottleFactory();
    }

    /**
 * Generates coins in the game world.
 */
    coinFactory() {
        let x = 50;
        let y = 280;
        const numSets = 3;
        const coinsPerSet = 5;
        const spacingX = 50;
        const spacingY = 30;
        for (let set = 0; set < numSets; set++) {
            for (let i = 0; i < coinsPerSet; i++) {
                let coin = new Coin(x, y);
                this.coin.push(coin);
                x += spacingX;
                y -= Math.floor(Math.random() * spacingY) + 1;
            }
            x += spacingX * (coinsPerSet + Math.floor(Math.random() * 3));
            y = 280;
        }
    }

    /**
     * Generates clouds in the game world.
     */
    cloudFactory() {
        let x = 700;
        const numClouds = 5;
        const spacingX = 720;
        for (let i = 0; i < numClouds; i++) {
            let random = Math.floor(Math.random() * 2) + 1;
            let cloud = new Cloud(`./img/5_background/layers/4_clouds/${random}.png`, x);
            this.clouds.push(cloud);
            x = spacingX * i;
        }
    }

    /**
     * Generates NormalChicken enemies and adds them to the enemies array.
     */
    chickenFactory() {
        const numChickens = 3;
        for (let i = 0; i < numChickens; i++) {
            let chicken = new NormalChicken();
            let smallChicken = new SmallChicken();
            this.enemies.push(chicken);
            this.enemies.push(smallChicken);
            if (i == numChickens - 1) {
                this.enemies.push(new Endboss('./img/4_enemie_boss_chicken/1_walk/G1.png'))
            }
        }
    }

    bottleFactory() {
        let x = 700;
        const numBottles = 10;
        const spacingX = Math.floor(Math.random() * 420) + 100;
        for (let i = 0; i < numBottles; i++) {
            let bottle = new Bottle(x);
            this.bottles.push(bottle);
            x = spacingX * i;
        }
    }
}
