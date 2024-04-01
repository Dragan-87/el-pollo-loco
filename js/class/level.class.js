class Level {
    enemies;
    clouds;
    worldBackgroundLayerOne;
    air;
    levelEndX = 470 * 3;

    constructor(enemies, clouds, worldBackgroundLayerOne, air) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.worldBackgroundLayerOne = worldBackgroundLayerOne;
        this.air = air;
    }
}