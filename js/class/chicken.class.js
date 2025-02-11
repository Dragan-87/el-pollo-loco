class Chicken extends MoveableObject {
    isSpliceable = false;
    WALK_IMAGES = []
    DEAD_IMAGES = []
    ANGRY_IMAGES = []
    HURT_IMAGES = []
    ATTACK_IMAGES = []

    constructor(objetctPositionX, objetctPositionY, img) {
        super(objetctPositionX, objetctPositionY, img);
        this.objetctPositionY = 480 - this.height;
        this.animate();
    }

    animate() {
        this.moveInterval = setInterval(() => {
            this.moveLeft();
            this.playAnimation(this.WALK_IMAGES);
        }, 1000 / 30);

        this.animationInterval = setInterval(() => {
            if (this.isDead()) {
                this.dealDamage = 0;
                this.die();
                setTimeout(() => {
                    this.isSpliceable = true;
                }, 1000);
            }
        }, 50);
    }

    /**
     * Kills the chicken.
     * Stops the movement and animation intervals, plays the dead animation,
     * and sets the chicken as spliceable. If the chicken is an instance of Endboss,
     * it also shows the end screen after a delay.
     */
    die() {
        clearInterval(this.moveInterval);
        clearInterval(this.animationInterval);
        this.playAnimation(this.DEAD_IMAGES);
        if(this instanceof Endboss) {
            setTimeout(() => {
                this.isSpliceable = true;
                setTimeout(() => {
                    gameOver()
                }, 500);
            }, 1000);
        } else {
                this.isSpliceable = true;
        }
    }


}
