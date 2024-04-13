class ThrowableObject extends MoveableObject {
    spiningBottle;
    brokenBottle;
    damage = 30;
    hitIndicator = false;

    THROW_BOTTLE_IMAGES = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]

    BROKEN_BOTTLE_IMAGES = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ]

    constructor(img, objetctPositionX, objecktPositionY) {
        super(img, (objetctPositionX + 50));
        this.loadImages(this.THROW_BOTTLE_IMAGES)
        this.loadImages(this.BROKEN_BOTTLE_IMAGES)
        this.speed = 30;
        this.objetctPositionY = objecktPositionY + 50;
        this.height = 50;
        this.width = 50;
        this.offSet.left = 10;
        this.offSet.right = 10;
        this.offSet.top = 10;
        this.offSet.bottom = 10;
        this.throw()
        this.animate();
    }

    /**
     * Throws the object.
     */
    throw() {
        this.speedY = 10;
        this.applyGravity();
        this.spiningBottle = setInterval(() => {
            this.objetctPositionX += 5;
            this.playAnimation(this.THROW_BOTTLE_IMAGES);
        }, 50);
    }

    /**
     * Hits an enemy with the throwable object.
     * @param {Array} enemies - The array of enemies to hit.
     */
    throwableObjectHitsEnemy(enemies) {
        if (!this.hitIndicator) {
            enemies.energy -= this.damage;
            this.hitIndicator = true;
        }
    }

    animate() {
        this.brokenBottle = setInterval(() => {
            if (this.hitIndicator) {
                this.animateBrokenBottle();
            }
        }, 200);
    }

    /**
     * Animates the broken bottle.
     * Clears the interval for spinning the bottle,
     * plays the animation for the broken bottle,
     * and clears the interval for the broken bottle animation
     * when the current image reaches the end of the animation images.
     */
    animateBrokenBottle() {
        clearInterval(this.spiningBottle);
        this.playAnimation(this.BROKEN_BOTTLE_IMAGES);
        if (this.currentImage >= this.BROKEN_BOTTLE_IMAGES.length) {
            clearInterval(this.brokenBottle);
        }
    }

}
