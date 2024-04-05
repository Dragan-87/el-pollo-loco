class ThrowableObject extends MoveableObject {

    BOTTLE_IMAGES = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]

    constructor(img, objetctPositionX) {
        super(img, objetctPositionX);
        this.loadImages(this.BOTTLE_IMAGES)
        this.speed = 20;
        this.objetctPositionX = 100;
        this.objetctPositionY = 330;
        this.height = 50;
        this.width = 50;
    }

    throw() {
        this.speedY = 30;
        this.speed = this.speed;
    }
}
