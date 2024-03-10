class World {

    character = new Character(0, 35, "../../img/2_character_pepe/2_walk/W-21.png");
    enemies = [
        new Chicken(45, 35, "../../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png"),
        new Chicken(100, 35, "../../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png"),
    ];
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
    }
}

addEventListener("keypress", (event) => {
    switch (event.key) {
        case "d":
            world.character.moveRight(10);
            break;
        case "a":
            world.character.moveLeft(10);
            break;
        case "w":
            world.character.jump();
            break;
    }
});
