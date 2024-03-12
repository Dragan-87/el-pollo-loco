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

    constructor(canves) {
        this.canves = canves;
        this.ctx = canves.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canves.width, this.canves.height);
        this.ctx.drawImage(this.character.img, this.character.objetctPositionX, this.character.objetctPositionY, this.character.width, this.character.height);
        requestAnimationFrame(() => this.draw());
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.objetctPositionX, enemy.objetctPositionY, enemy.width, enemy.height);
        });
        this.clouds.forEach(cloud => {
            this.ctx.drawImage(cloud.img, cloud.objetctPositionX, cloud.objetctPositionY, cloud.width, cloud.height);
        });
    }
}

addEventListener("keypress", (event) => {
    switch (event.key) {
        case "d":
            world.character.moveRight(10);
            world.character.checkPosition();
            break;
        case "a":
            world.character.moveLeft(10);
            break;
        case "w":
            world.character.jump();
            break;
    }
});
