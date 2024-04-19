let canves;
let world = false;
let keyboard = new Keyboard();
let startScreen = docID("start-game-section");
touchControlLeftHand();
touchControlRightHand();



addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowRight':
            keyboard.RIGHT = true;
            break;
        case ' ':
        case 'ArrowUp':
            keyboard.JUMP = true;
            break;
        case 'ArrowDown':
            keyboard.DOWN = true;
            break;
        case 'ArrowLeft':
            keyboard.LEFT = true;
            break;
        case 'd':
        case 'D':
            keyboard.THROW = true;
            break;
        default:
            break;
    }
});

addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'ArrowRight':
            keyboard.RIGHT = false;
            break;
        case 'ArrowUp':
        case ' ':
            keyboard.JUMP = false;
            break;
        case 'ArrowLeft':
            keyboard.LEFT = false;
            break;
        case 'd':
        case 'D':
            keyboard.THROW = false;
            break;
        default:
            break;
    }
});

function docID(id) {
    return document.getElementById(id);
}

function startGame() {
    console.log(window);
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

/**
 * Sets up touch controls for the left hand.
 */
/**
 * Sets up touch controls for the left hand.
 */
function touchControlLeftHand() {
    const leftButton = document.getElementById('left-button');
    const rightButton = document.getElementById('right-button');

    leftButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    leftButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });

    rightButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    rightButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
}

/**
 * Sets up touch controls for the right hand.
 */
function touchControlRightHand() {
    const jumpButton = document.getElementById('jump-button');
    const throwButton = document.getElementById('throw-button');

    jumpButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.JUMP = true;
    });
    jumpButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.JUMP = false;
    });

    throwButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.THROW = true;
    });
    throwButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.THROW = false;
    });
}


/**
 * checks the orientation
 * @returns true if orientation is in landscape, false if not
 */
function checkOrientation() {
    return (window.innerWidth > window.innerHeight);
}

/**
 * eventlistener to tell the user to switch to landscape mode
 */
window.addEventListener("load", function () {
    let orientationInfo = document.getElementById('landscape');
    if (checkOrientation()) {
        orientationInfo.classList.add('d-none');
    } else if (!checkOrientation() && window.innerWidth > 900) {
        orientationInfo.classList.remove('d-none');
    }
}, false);

/**
 * eventlistener to tell the user to switch to landscape mode
 */
window.addEventListener("resize", function () {
    let orientationInfo = document.getElementById('landscape');
    if (checkOrientation()) {
        orientationInfo.classList.add('d-none');
    } else if (!checkOrientation()) {
        orientationInfo.classList.remove('d-none');
    }
}, false);
