class MoveableObject extends DrawableObject{
    defaultObjetctPositionY;
    speed;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    dealDamage;
    energy;
    lastHitTaken;

    DEAD_IMAGES = [];

    offSet = {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    }

    constructor(img, objetctPositionX) {
        super(img, objetctPositionX);
        this.defaultObjetctPositionY = 480 - this.height - 60;

    }

    moveRight() {
        this.objetctPositionX += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.objetctPositionX -= this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.objetctPositionY -= this.speedY;
                this.speedY -= this.acceleration;
            }

        }, 1000 / 15);
    }

    isAboveGround() {
        if(this instanceof ThrowableObject){
            return true;
        } else {
            return this.objetctPositionY < this.defaultObjetctPositionY;d
        }

    }

    // isColliding(obj) {
    //     return (this.objetctPositionX + this.width) >= obj.objetctPositionX && this.objetctPositionX <= (obj.objetctPositionX + obj.width) &&
    //         (this.objetctPositionY + this.offSetY + this.height) >= obj.objetctPositionY &&
    //         (this.objetctPositionY + this.offSetY) <= (obj.objetctPositionY + obj.height) &&
    //         obj.onCollisionCourse;
    // }

    // isColliding(obj) {
    //     return this.objetctPositionX + this.width > obj.objetctPositionX &&
    //         this.objetctPositionY + this.height > obj.objetctPositionY &&
    //         this.objetctPositionX < obj.objetctPositionX &&
    //         this.objetctPositionY < obj.objetctPositionY + obj.height;
    // }

    isColliding(obj) {
        return (this.objetctPositionX + this.width) > (obj.objetctPositionX + obj.offSet.left) &&
            (this.objetctPositionY + this.height) > (obj.objetctPositionY + obj.offSet.top) &&
            (this.objetctPositionX + this.offSet.left) < (obj.objetctPositionX + obj.width - obj.offSet.right) &&
            (this.objetctPositionY + this.offSet.top) < (obj.objetctPositionY + obj.height - obj.offSet.bottom);
    }

    hit(dmg) {
        this.energy -= dmg;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHitTaken = Date.now();
        }
    }

    isDead() {
        return this.energy <= 0;
    }

    isHurt() {
        let timepassed = Date.now() - this.lastHitTaken;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    statusBarPercentage(obj, statusbarValue) {
        obj.setPercentage(statusbarValue, obj);
    }

}
