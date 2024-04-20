class Statusbar extends DrawableObject{

    percentage;

    constructor(img, objetctPositionX, objetctPositionY) {
        super(img, objetctPositionX);;
        this.objetctPositionY = objetctPositionY;
        this.width = 150;
        this.height = 40;
    }

    setPercentage(percentage, obj) {
        this.percentage = percentage;
        let imgPath = obj.IAMGES[this.resolveImage()];
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
            default:
                return 0;
        }
    }

    /**
     * Sets the percentage value of a status bar.
     *
     * @param {object} obj - The status bar object.
     * @param {number} statusbarValue - The percentage value to set.
     */
    statusBarPercentage(obj, statusbarValue) {
        obj.setPercentage(statusbarValue, obj);
    }

}
