let canves;
let world = false;
let keyboard = new Keyboard();
let startScreen = docID("start-game-section");

function init() {

}

addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
        case 'ArrowRight':
        case "D":
            keyboard.RIGHT = true;
            break;
        case ' ':
        case 'w':
        case "W":
        case 'ArrowUp':
            keyboard.JUMP = true;
            break;
        case 'ArrowDown':
            keyboard.DOWN = true;
            break;
        case 'a':
        case 'A':
        case 'ArrowLeft':
            keyboard.LEFT = true;
            break;
        case 'q':
        case 'Q':
            keyboard.THROW = true;
            break;
        default:
            break;
    }
});

addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
        case 'D':
        case 'ArrowRight':
            keyboard.RIGHT = false;
            break;
        case 'ArrowUp':
        case ' ':
        case 'w':
        case 'W':
            keyboard.JUMP = false;
            break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
            keyboard.LEFT = false;
            break;
        case 'q':
        case 'Q':
            keyboard.THROW = false;
            break;
        default:
            break;
    }
});

// setInterval(() => {
//     setTimeout(() => {
//         gameOver()
//         console.log("game over");
//     }
//     , 1000);
// }, 200);

function docID(id) {
    return document.getElementById(id);
}

function startGame() {
    canves = docID('canvas');
    world = new World(canves, keyboard);
    canves.classList.remove('d-none');
    startScreen.classList.remove('start-game-section');
    startScreen.classList.add('d-none');
    docID('game-over').classList.add('d-none');
}

function showEndScreen() {
    window.location.reload();
}

/**
 * checks the orientation
 * @returns true if orientation is in landscape, false if not
 */
function checkOrientation() {
    return (window.innerWidth > window.innerHeight);
}

// /**
//  * eventlistener to tell the user to switch to landscape mode
//  */
// window.addEventListener("resize", function () {
//     let orientationInfo = document.getElementById('landscape');
//     if (checkOrientation()) {
//         orientationInfo.classList.add('d-none');
//     } else if (!checkOrientation() && window.innerWidth < 900) {
//         orientationInfo.classList.remove('d-none');
//     }
// }, false);


// /**
//  * eventlistener to tell the user to switch to landscape mode
//  */
// window.addEventListener("load", function () {
//     let orientationInfo = document.getElementById('landscape');
//     if (checkOrientation()) {
//         orientationInfo.classList.add('d-none');
//     } else if (!checkOrientation() && window.innerWidth < 900) {
//         orientationInfo.classList.remove('d-none');
//     }
// }, false);


function clearAllIntervals() {
    for (let i = 1; i < 1000; i++) window.clearInterval(i);
}

function showGameOverScreen() {
    let gameOverScreen = docID('game-over');
    gameOverScreen.classList.remove('d-none');
}

function restartGame() {
    window.location.reload();
}
