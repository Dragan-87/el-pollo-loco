class MoveableObject extends DrawableObject{
    defaultObjetctPositionY;
    speed;
    otherDirection = false;
    speedY = 0;
    acceleration = 1;
    dealDamage;
    energy;
    lastHitTaken = 0;

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

    jump() {
        this.speedY = 15;
    }

    moveRight() {
        this.objetctPositionX += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.objetctPositionX -= this.speed;
    }

    /**
     * Plays the animation for the movable object.
     *
     * @param {string[]} images - An array of image paths for the animation.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
    }

    /**
     * Plays the animation one time using the provided images.
     * @param {string[]} images - An array of image paths.
     */
    playAnimationOneTime(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++
        if (i == images.length - 1) {
            this.currentImage = 0;
        }
    }

    /**
     * Applies gravity to the movable object.
     * The object's position is updated based on its speed and acceleration.
     * This method is called repeatedly at a fixed interval.
     */
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

    /**
     * Checks if the current object is colliding with another object.
     * @param {Object} obj - The object to check collision with.
     * @returns {boolean} - True if collision occurs, false otherwise.
     */
    isColliding(obj) {
        return (this.objetctPositionX + this.width) > (obj.objetctPositionX + obj.offSet.left) &&
            (this.objetctPositionY + this.height) > (obj.objetctPositionY + obj.offSet.top) &&
            (this.objetctPositionX + this.offSet.left) < (obj.objetctPositionX + obj.width - obj.offSet.right) &&
            (this.objetctPositionY + this.offSet.bottom) < (obj.objetctPositionY + obj.height - obj.offSet.top);
    }

    isJumpingOnHead(obj) {
        return this.objetctPositionY + this.height - this.offSet.top> obj.objetctPositionY + obj.offSet.bottom
    }

    isDead() {
        return this.energy <= 0;
    }

    /**
     * Reduces the energy of the object by the specified amount.
     * If the energy reaches 0 or below, it is set to 0.
     * Updates the timestamp of the last hit taken.
     * @param {number} dmg - The amount of damage to be inflicted.
     */
    hit(dmg) {
        if (!this.isHurt() && (this instanceof Character)){
            this.energy -= dmg;
            if (this.energy < 0) {
                this.energy = 0;
            } else {
                this.lastHitTaken = new Date().getTime();
            }
        }
    }

    /**
     * Checks if the object is currently in a hurt state.
     * @returns {boolean} True if the object is hurt, false otherwise.
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHitTaken;
        timepassed = timepassed / 1000;
        console.log(timepassed);
        return timepassed < 1;
    }

    /**
     * Sets the percentage value of a status bar for a given object.
     *
     * @param {Object} obj - The object for which the status bar percentage needs to be set.
     * @param {number} statusbarValue - The percentage value to set for the status bar.
     * @returns {void}
     */
    statusBarPercentage(obj, statusbarValue) {
        obj.setPercentage(statusbarValue, obj);
    }

    /**
     * Checks if the current object is jumping on the head of another object.
     * @param {Object} obj - The object to check for collision with.
     * @returns {boolean} - Returns true if the current object is colliding with the given object, is not spliceable, and is above the ground; otherwise, returns false.
     */
    isJumpingOnHead(obj) {
        return this.isColliding(obj) && !obj.isSpliceable && this.isAboveGround()
    }
}
