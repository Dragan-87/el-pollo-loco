class CollectableItem extends DrawableObject {


    constructor(img, objetctPositionX, objetctPositionY) {
        super();
        this.objetctPositionX = 1000;
        this.objetctPositionY = 480 - 210;
        this.loadImage('img/7_collectable_items/heart.png');
    }
}
