class Endboss extends Chicken {
    constructor(name, health, attackPower, objetctPositionX, objetctPositionY, img) {
        super(objetctPositionX, objetctPositionY, img);
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    }

    attack(target) {
        target.health -= this.attackPower;
        console.log(`${this.name} attacks ${target.name} for ${this.attackPower} damage.`);
    }

    takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} takes ${damage} damage.`);
    }

    isAlive() {
        return this.health > 0;
    }
}