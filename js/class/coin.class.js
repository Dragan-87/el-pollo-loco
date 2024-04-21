class Coin extends CollectableItem {
    heigth = 25;
    width = 100;
    objetctPositionY = 480 - 150 - 60;
    // coinSound = new Audio("./audio/coin/coin-sound.mp3");

    COIN_IMAGES = [
        "img/8_coin/coin_1.png",
        "img/8_coin/coin_2.png",
    ]

    constructor(objetctPositionX, objektPositionY) {
        super("img/8_coin/coin_1.png", objetctPositionX);
        this.objetctPositionY = objektPositionY || this.objetctPositionY;
        this.loadImages(this.COIN_IMAGES);
        this.offSet.left = 40;
        this.offSet.right = 35;
        this.offSet.top = 50;
        this.offSet.bottom = 50;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.COIN_IMAGES);
        }, 200);
    }

    soundOff() {
        this.coinSound.volume = 0;
    }

    soundOn() {
        this.coinSound.volume = 0.1;
    }
}
