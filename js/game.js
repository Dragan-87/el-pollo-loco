let canves;
let world
let keyboard = new Keyboard();

function init() {
    canves = document.getElementById('canves');
    world = new World(canves, keyboard);
}

addEventListener("keydown", (event) => {
    switch (event.key) {
        case "d":
            keyboard.RIGHT = true;
            break;
        case "ArrowUp":
            keyboard.JUMP = true;
            break;
        case "ArrowDown":
            keyboard.DOWN = true;
            break;
        case "ArrowLeft":
            keyboard.LEFT = true;
            break;
        case "ArrowRight":
            keyboard.RIGHT = true;
            break;
        case "a":
            keyboard.LEFT = true;
            break;
        case "w":
            keyboard.JUMP = true;
            break;
        case " ":
            keyboard.JUMP = true;
            break;
        default:
            break;
    }
});

addEventListener("keyup", (event) => {
    switch (event.key) {
        case "d":
            keyboard.RIGHT = false;
            break;
        case "ArrowUp":
            keyboard.JUMP = false;
            break;
        case "ArrowDown":
            keyboard.DOWN = false;
            break;
        case "ArrowLeft":
            keyboard.LEFT = false;
            break;
        case "ArrowRight":
            keyboard.RIGHT = false;
            break;
        case "a":
            keyboard.LEFT = false;
            break;
        case "w":
            keyboard.JUMP = false;
            break;
        case " ":
            keyboard.JUMP = false;
            break;
        default:
            break;
    }
});
