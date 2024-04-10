class SalsaBottle extends CollectableItem {

    SALSA_BOTTLE = [
        "./img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
        "./img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
    ]

    AMMONITION = [];

    constructor(img, objetctPositionX) {
        super(img, objetctPositionX);
        this.objetctPositionX = objetctPositionX;
        this.loadImages(this.SALSA_BOTTLE);
    }
}
