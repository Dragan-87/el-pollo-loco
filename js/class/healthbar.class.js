class Healthbar extends Statusbar {

    Health_IMGS = [
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
    ]

    constructor() {
        super(this.Health_IMGS[0], 10, 10);
        this.loadImages(this.Health_IMGS);
        this.loadImages = this.Health_IMGS;
        this.width = 150;
        this.height = 40;
    }
}
