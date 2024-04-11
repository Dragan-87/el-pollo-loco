class Coinbar extends Statusbar {
    IAMGES = [
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
    ]

    constructor() {
        super("img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png", 10, 90);
        this.loadImages(this.IAMGES);
        this.percentage = 0;
    }
}
