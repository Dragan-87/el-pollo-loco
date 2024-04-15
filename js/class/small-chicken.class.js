class SmallChicken extends Chicken {
    WALK_IMAGES = [
        "img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
        "img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
        "img/3_enemies_chicken/chicken_small/1_walk/3_w.png"
    ];

    DEAD_IMAGES = [
        "img/3_enemies_chicken/chicken_small/2_dead/dead.png"
    ];


    constructor() {
        super("img/3_enemies_chicken/chicken_small/1_walk/1_w.png", 200 + Math.random() * (500*3));
        this.speed = 1;
        this.health = 1;
        this.height = 40;
        this.width = 40;
        this.dealDamage = 20;
        this.speed = 0.35 + Math.random() * 0.4;
        this.offSet.left = 5;
        this.offSet.right = 5
        this.offSet.top = 5;
        this.offSet.bottom = 5;
        this.energy = 20;
        this.acceleration = 1;
        this.objetctPositionY = 480 - this.height - 60;
        this.defaultObjetctPositionY = 420 - this.height;
        this.loadImages(this.WALK_IMAGES);
        this.loadImages(this.DEAD_IMAGES);
        this.applyGravity();
        this.chickenJump();
    }

    chickenJump() {
        setInterval(() => {
            if (!this.isAboveGround() && !this.isDead()) {
                    this.jump();
            }
        }, 2000);
    }
}
