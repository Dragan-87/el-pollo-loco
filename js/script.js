let canves;
let world;
let ctx;

function init() {
    canves = document.getElementById('canves');
    ctx = canves.getContext('2d');
    world = new World(canves);
    world.enemies.push(new Chicken(20, 20, "../../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png"));
    setTimeout(() => {
        world.draw()
        ctx.drawImage(world.enemies[0].img, world.enemies[0].objetctPositionX, world.enemies[0].objetctPositionY, 30, 30);
    }, 1000)
}
