class Chicken extends MoveableObject {

    WALK_IMAGES = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ]

    DEAD_IMAGES = [
        "img/3_enemies_chicken/chicken_normal/2_dead/dead.png"
    ]

    constructor(objetctPositionX, objetctPositionY, img) {
        super(objetctPositionX, objetctPositionY, img);
        this.loadImages(this.WALK_IMAGES);
        this.loadImages(this.DEAD_IMAGES);
        this.height = 40;
        this.width = 40;
        this.objetctPositionX = 200 + Math.random() * 500;
        this.objetctPositionY = 420 - this.height;
        this.speed = 0.25 + Math.random() * 0.2;
        this.dealDamage = 20;
        this.animate();
        this.moveLeft();
        this.offSet.left = 5;
        this.offSet.right = 5
        this.offSet.top = 5;
        this.offSet.bottom = 5;
        this.energy = 20;
    }

    animate() {
        this.moveInterval = setInterval(() => {
            this.moveLeft();
        }, 1000 / 55);

        this.animationInterval = setInterval(() => {
            this.playAnimation(this.WALK_IMAGES);
        }, 50);
    }

    die() {
        clearInterval(this.moveInterval);
        clearInterval(this.animationInterval);
        this.playAnimation(this.DEAD_IMAGES);
    }
}
