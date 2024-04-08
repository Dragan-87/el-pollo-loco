class Satusbar extends DrawableObject{

    IMAGES = [
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
    ]

    percentage = 100;

    constructor(img, objetctPositionX, objetctPositionY) {
        super(img, objetctPositionX);
        this.loadImages(this.IMAGES);
        this.objetctPositionY = objetctPositionY;
        this.width = 150;
        this.height = 40;
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let imgPath = this.IMAGES[this.resolveImage()];
        this.img = this.imageCache[imgPath];
    }

    resolveImage() {
        switch (this.percentage) {
            case 100:
                return 0;
            case 80:
                return 1;
            case 60:
                return 2;
            case 40:
                return 3;
            case 20:
                return 4;
            case 0:
                return 5;
        }
    }

}
