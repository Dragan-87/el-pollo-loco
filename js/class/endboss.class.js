class Endboss extends Chicken {

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

    DEAD_IMAGES = [
        "img/4_enemie_boss_chicken/5_dead/G24.png",
        "img/4_enemie_boss_chicken/5_dead/G25.png",
        "img/4_enemie_boss_chicken/5_dead/G26.png",
    ]

    HURT_IMAGES = [
        "img/4_enemie_boss_chicken/4_hurt/G21.png",
        "img/4_enemie_boss_chicken/4_hurt/G22.png",
        "img/4_enemie_boss_chicken/4_hurt/G23.png",
    ]

    ATTACK_IMAGES = [
        "img/4_enemie_boss_chicken/3_attack/G13.png",
        "img/4_enemie_boss_chicken/3_attack/G14.png",
        "img/4_enemie_boss_chicken/3_attack/G15.png",
        "img/4_enemie_boss_chicken/3_attack/G16.png",
        "img/4_enemie_boss_chicken/3_attack/G17.png",
        "img/4_enemie_boss_chicken/3_attack/G18.png",
        "img/4_enemie_boss_chicken/3_attack/G19.png",
        "img/4_enemie_boss_chicken/3_attack/G20.png",
    ]

    constructor(img) {
        super(img, 720);
        this.objetctPositionX = 720 - this.width;
        this.objetctPositionY = 420 - this.height;
        this.width = 100;
        this.dealDamage = 40;
        this.offSet.top = 10;
        this.offSet.bottom = 30;
        this.energy = 100;
        this.loadImages(this.ANGRY_IMAGES);
        this.loadImages(this.DEAD_IMAGES);
        this.loadImages(this.HURT_IMAGES);
        this.loadImages(this.ATTACK_IMAGES);
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.ANGRY_IMAGES);

            if (this.isDead()) {
                this.dealDamage = 0;
                this.die();
            }
        }, 300);
    }
}
