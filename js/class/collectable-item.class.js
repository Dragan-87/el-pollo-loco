class CollectableItem extends MoveableObject {

    COLLECTED_ITEM = []

    constructor(img, objetctPositionX) {
        super(img, objetctPositionX);
    }

    collectItem(obj) {
        obj.forEach((item, index) => {
            if (this.isColliding(item) && item instanceof CollectableItem) {
                this.COLLECTED_ITEM.push(item);
                obj.splice(index, 1);
            }
        });
    }
}
