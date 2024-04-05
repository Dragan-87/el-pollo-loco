class MoveableObject extends DrawableObject{
    defaultObjetctPositionY;
    speed;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    dealDamage;
    energy;
    lastHitTaken;

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
        return this.objetctPositionY < this.defaultObjetctPositionY;
    }

    drawColision() {
        this.ctx.beginPath();
        this.ctx.lineWidth = '5';
        this.ctx.strokeStyle = 'red';
        this.ctx.rect(this.objetctPositionX, this.objetctPositionY, this.width, this.height);
        this.ctx.stroke();
    };

    // isColliding(obj) {
    //     return (this.objetctPositionX + this.width) >= obj.objetctPositionX && this.X <= (obj.objetctPositionX + obj.width) &&
    //         (this.objetctPositionY + this.offsetY + this.height) >= obj.objetctPositionY &&
    //         (this.objetctPositionY + this.offsetY) <= (obj.objetctPositionY + obj.height) &&
    //         obj.onCollisionCourse;

    // }

    isColliding(obj) {
        return this.objetctPositionX + this.width > obj.objetctPositionX &&
            this.objetctPositionY + this.height > obj.objetctPositionY &&
            this.objetctPositionX < obj.objetctPositionX && this.objetctPositionY < obj.objetctPositionY + obj.height;
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
        return this.energy === 0;
    }

    isHurt() {
        let timepassed = Date.now() - this.lastHitTaken;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    statusBarPercentage() {
        this.world.healthBar.setPercentage(this.energy);
    }
}
