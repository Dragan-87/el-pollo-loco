class Bottle extends CollectableItem {
    objetctPositionY = 350;
    width = 50;
    height = 70;
    getBottleSound = new Audio("./audio/bottle/get-bottle.mp3");

    constructor(objetctPositionX) {
        super("img/6_salsa_bottle/1_salsa_bottle_on_ground.png"
            , objetctPositionX);
        this.offSet.left = 20;
        this.offSet.right = 10;
        this.offSet.top = 10;
        this.offSet.bottom = 10;
    }
}
