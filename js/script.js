let canves;
let world = new World()
let ctx;

function init() {
    canves = document.getElementById('canves');
    ctx = canves.getContext('2d');
    world.enemies.push(new Chicken(20, 20, "../../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png"));
    setTimeout(() => {
        ctx.drawImage(world.character.img, world.character.objetctPositionX, world.character.objetctPositionY, 100, 150);
    }, 1000)
}
