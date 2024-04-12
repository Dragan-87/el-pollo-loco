class ThrowableObject extends MoveableObject {

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

    damage = 20;

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
    }

    throw() {
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            this.objetctPositionX += 5;
            this.playAnimation(this.THROW_BOTTLE_IMAGES);
            if (this.objetctPositionY > 390) {
                this.playAnimation(this.BROKEN_BOTTLE_IMAGES);

            }
        }, 50);
    }

    // throwingObjectHitEnemy(array) {
    //     setInterval(() => {
    //         array.forEach(enemy => {
    //             if (this.isColliding(enemy)) {
    //                 console.log("hit");
    //             }
    //         })
    //     }, 100);
    // }

}
