class Chicken extends MoveableObject {

    constructor(objetctPositionX, objetctPositionY, img) {
        super(objetctPositionX, objetctPositionY, img);
        this.loadImages([
            "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
            "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
            "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
        ]);
        this.height = 40;
        this.width = 40;
        this.objetctPositionX = 200 + Math.random() * 500;
        this.objetctPositionY = 420 - this.height;
    }

}
