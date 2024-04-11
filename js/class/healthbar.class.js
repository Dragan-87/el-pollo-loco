class Healthbar extends Statusbar {

    IAMGES = [
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
    ]

    constructor() {
        super("img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png", 10, 10);
        this.loadImages(this.IAMGES);
        this.percentage = 100;
    }
}
