class Level {
    enemies;
    clouds;
    worldBackgroundLayerOne;
    air;
    levelEndX = 470 * 3;
    gameOverBackground;

    constructor(enemies, clouds, worldBackgroundLayerOne, air, gameOverBackground) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.worldBackgroundLayerOne = worldBackgroundLayerOne;
        this.air = air;
        this.gameOverBackground = gameOverBackground;
    }
}
