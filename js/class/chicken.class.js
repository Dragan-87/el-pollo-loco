class Chicken extends MoveableObject {
    objetctPositionX
    objetctPositionY

    WALK_IMAGES = [ 
        "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
        "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
        "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
    ]

    constructor(objetctPositionX, objetctPositionY, img) {
        super(objetctPositionX, objetctPositionY, img);
        this.loadImages(this.WALK_IMAGES);
        this.height = 40;
        this.width = 40;
        this.objetctPositionX = 200 + Math.random() * 500;
        this.objetctPositionY = 420 - this.height;
        this.animate();
        this.moveLeft();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.WALK_IMAGES.length;
            let path = this.WALK_IMAGES[i];
            this.img = this.imageCache[path];
            this.currentImage++
            this.moveLeft();
        }, 100);
    }

    moveLeft() {
            this.objetctPositionX -= 2;
    }

}
