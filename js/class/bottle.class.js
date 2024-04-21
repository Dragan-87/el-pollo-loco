class Bottle extends CollectableItem {
    objetctPositionY = 350;
    width = 50;
    height = 70;
    // bottleSound = new Audio("./audio/bottle/get-bottle.mp3");

    constructor(objetctPositionX) {
        super("img/6_salsa_bottle/1_salsa_bottle_on_ground.png"
            , objetctPositionX);
        this.offSet.left = 20;
        this.offSet.right = 10;
        this.offSet.top = 10;
        this.offSet.bottom = 10;
    }

    soundOff() {
        this.bottleSound.volume = 0;
    }

    soundOn() {
        this.bottleSound.volume = 0.1;
    }
}
