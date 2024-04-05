class Endboss extends MoveableObject {

    ANGRY_IMAGES = [
        "./img/4_enemie_boss_chicken/2_alert/G5.png",
        "./img/4_enemie_boss_chicken/2_alert/G6.png",
        "./img/4_enemie_boss_chicken/2_alert/G7.png",
        "./img/4_enemie_boss_chicken/2_alert/G8.png",
        "./img/4_enemie_boss_chicken/2_alert/G9.png",
        "./img/4_enemie_boss_chicken/2_alert/G10.png",
        "./img/4_enemie_boss_chicken/2_alert/G11.png",
        "./img/4_enemie_boss_chicken/2_alert/G12.png",
    ];

    constructor(img) {
        super(img, 720);
        this.loadImages(this.ANGRY_IMAGES);
        this.objetctPositionX = 720 - this.width;
        this.objetctPositionY = 420 - this.height;
        this.width = 100;
        this.dealDamage = 40;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.ANGRY_IMAGES);
        }, 300);
    }
}
