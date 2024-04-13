class NormalChicken extends Chicken {

    WALK_IMAGES = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ]

    DEAD_IMAGES = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ]

    constructor() {
        super('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png', 200 + Math.random() * 500);
        this.speed = 1;
        this.health = 1;
        this.height = 40;
        this.width = 40;
        this.dealDamage = 20;
        this.speed = 0.25 + Math.random() * 0.2;
        this.offSet.left = 5;
        this.offSet.right = 5
        this.offSet.top = 5;
        this.offSet.bottom = 5;
        this.energy = 20;
        this.objetctPositionY = 420 - this.height;
        this.loadImages(this.WALK_IMAGES);
        this.loadImages(this.DEAD_IMAGES);
        this.moveLeft();
    }
}
