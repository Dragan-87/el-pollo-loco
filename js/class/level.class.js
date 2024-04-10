class Level {
    enemies;
    clouds;
    worldBackgroundLayerOne;
    air;
    levelEndX = 470 * 3;
    gameOverBackground;
    coins;

    constructor(enemies, clouds, worldBackgroundLayerOne, air, gameOverBackground, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.worldBackgroundLayerOne = worldBackgroundLayerOne;
        this.air = air;
        this.gameOverBackground = gameOverBackground;
        this.coins = coins;
    }
}
