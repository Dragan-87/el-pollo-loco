class CollectableItem extends MoveableObject {

    COLLECTED_ITEM = []

    constructor(img, objetctPositionX) {
        super(img, objetctPositionX);
    }

    /**
     * Collects items that collide with the current object.
     * @param {Array} obj - The array of objects to check for collision.
     */
    collectItem(obj) {
        obj.forEach((item, index) => {
            if (this.isColliding(item) && item instanceof CollectableItem) {
                this.COLLECTED_ITEM.push(item);
                obj.splice(index, 1);
            }
        });
    }
}
