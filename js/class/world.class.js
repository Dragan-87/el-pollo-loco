class World {

    character = new Character(20, 0, "../../img/2_character_pepe/2_walk/W-21.png");
    enemies = [
        new Chicken(180, 120, "../../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png"),
        new Chicken(120, 0, "../../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png"),
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

    }
}
