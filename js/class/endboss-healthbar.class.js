class EndbossHealthbar extends Statusbar {

    IAMGES = [
        "img/7_statusbars/2_statusbar_endboss/orange/orange100.png",
        "img/7_statusbars/2_statusbar_endboss/orange/orange80.png",
        "img/7_statusbars/2_statusbar_endboss/orange/orange60.png",
        "img/7_statusbars/2_statusbar_endboss/orange/orange40.png",
        "img/7_statusbars/2_statusbar_endboss/orange/orange20.png",
        "img/7_statusbars/2_statusbar_endboss/orange/orange0.png"
    ]

    constructor() {
        super("img/7_statusbars/2_statusbar_endboss/orange/orange100.png", 600, -40);
        this.loadImages(this.IAMGES);
        this.percentage = 100;
    }
}
