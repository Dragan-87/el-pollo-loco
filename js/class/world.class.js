class World {

    character = new Character(20, 0, "../../img/2_character_pepe/1_idle/idle/I-1.png");
    enemies = [
        new Chicken(180, 120, "../../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png"),
        new Chicken(120, 0, "../../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png"),
    ];
    canves;
    ctx;

    constructor(canves) {
        this.canves = canves;
        this.ctx = canves.getContext('2d');
    }

    draw() {
        this.ctx.drawImage(this.character.img, this.character.objetctPositionX, this.character.objetctPositionY, this.character.width, this.character.height);
    }
}
