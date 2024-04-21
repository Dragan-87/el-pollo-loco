class Endboss extends Chicken {
    isFightable = false;
    charachterPositionX;

    WALK_IMAGES = [
        "./img/4_enemie_boss_chicken/1_walk/G1.png",
        "./img/4_enemie_boss_chicken/1_walk/G2.png",
        "./img/4_enemie_boss_chicken/1_walk/G3.png",
        "./img/4_enemie_boss_chicken/1_walk/G4.png",
    ];

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
        this.objetctPositionX = 720*2 - this.width;
        this.objetctPositionY = this.height
        this.height = 300;
        this.width = 150;
        this.dealDamage = 20;
        this.offSet.top = 10;
        this.offSet.bottom = 50;
        this.energy = 100;
        this.loadImages(this.ANGRY_IMAGES);
        this.loadImages(this.DEAD_IMAGES);
        this.loadImages(this.HURT_IMAGES);
        this.loadImages(this.ATTACK_IMAGES);
        this.loadImages(this.WALK_IMAGES);
    }

    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.dealDamage = 0;
                this.die();
            } else if (this.isHurt()) {
                chickenSound1.play();
                this.playAnimation(this.HURT_IMAGES);
            } else if (this.attack()) {
                this.playAnimation(this.ATTACK_IMAGES);
            } else if (this.isFightable) {
                this.speed = 5;
                this.moveLeft();
                this.playAnimation(this.WALK_IMAGES);
            }
        }, 200);
    }

    /**
     * Determines if the end boss can perform an attack.
     * @returns {boolean} True if the end boss can attack, false otherwise.
     */
    attack() {
        if(this.charachterPositionX > this.objetctPositionX - 70) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Starts the boss attack.
     */
    startBossAttack() {
        this.isFightable = true;
    }
}
