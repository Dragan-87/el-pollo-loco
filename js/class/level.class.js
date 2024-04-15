class Level {
    enemies;
    clouds;
    worldBackgroundLayerOne;
    air;
    levelEndX = 470 * 3;
    gameOverBackground;
    coins;
    coin = [];
    clouds = [];

    constructor(enemies, worldBackgroundLayerOne, air, gameOverBackground) {
        this.enemies = enemies;
        this.worldBackgroundLayerOne = worldBackgroundLayerOne;
        this.air = air;
        this.gameOverBackground = gameOverBackground;
        this.coinFactory();
        this.cloudFactory();
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
            console.log(x);
        }
    }

    
}
