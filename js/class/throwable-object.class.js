class ThrowableObject extends MoveableObject {

    THROW_BOTTLE_IMAGES = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]

    constructor(img, objetctPositionX) {
        super(img, objetctPositionX);
        this.loadImages(this.THROW_BOTTLE_IMAGES)
        this.speed = 20;
        this.objetctPositionX;
        this.objetctPositionY;
        this.height = 50;
        this.width = 50;
        this.throw(20, 350);
    }

    throw(objetctPositionX, objetctPositionY) {
        this.speedY = 20;
        this.objetctPositionX = objetctPositionX;
        this.objetctPositionY = objetctPositionY;
        this.applyGravity();
        setInterval(() => {
            this.objetctPositionX  += this.speed;
        }, 50);
    }
}
