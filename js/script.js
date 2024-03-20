let canves;
let world

function init() {
    canves = document.getElementById('canves');
    world = new World(canves);
}

addEventListener("keypress", (event) => {
    switch (event.key) {
        case "d":
            world.character.moveRight(10);
            world.character.checkPosition();
            break;
        case "a":
            world.character.moveLeft(10);
            break;
        case "w":
            world.character.jump();
            break;
    }
});
