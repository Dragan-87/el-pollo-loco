let canvas;
let world = false;
let keyboard = new Keyboard();
let startScreen = docID("start-game-section");
// let bgmusic = new Audio("./audio/background-music/background-music-2.mp3");

touchControlLeftHand();
touchControlRightHand();


/**
 * Toggles the sound on or off.
 */
// function toggleSound() {
//     let mutedSound = docID('mute-sound');
//     if (isMuted) {
//         isMuted = false;
//         bgmusic.pause();
//         world.character.toggleMute();
//         world.coins.forEach(coin => coin.soundOff());
//         world.salsaBottles.forEach(bottle => bottle.soundOff());
//         mutedSound.src = './img/icons/mute-sound.png';
//     } else {
//         isMuted = true;
//         bgmusic.play();
//         world.character.toggleMute();
//         world.coins.forEach(coin => coin.soundOn());
//         world.salsaBottles.forEach(bottle => bottle.soundOn());
//         mutedSound.src = './img/icons/play-sound.png';
//     }
// }

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

/**
 * Retrieves an element from the document using its ID.
 *
 * @param {string} id - The ID of the element to retrieve.
 * @returns {HTMLElement|null} The element with the specified ID, or null if no element is found.
 */
function docID(id) {
    return document.getElementById(id);
}

/**
 * Starts the game.
 */
function startGame() {
    canvas = docID('canvas');
    world = new World(canvas, keyboard);
    canvas.classList.remove('d-none');
    startScreen.classList.remove('start-game-section');
    startScreen.classList.add('d-none');
    docID('game-over').classList.add('d-none');
    backgroundMusic.play();

}

/**
 * Reloads the current window, effectively showing the end screen.
 */
function showEndScreen() {
    window.location.reload();
}

/**
 * Clears all intervals created by the window.setInterval() method.
 */
function clearAllIntervals() {
    for (let i = 1; i < 1000; i++) window.clearInterval(i);
}

/**
 * Displays the game over screen.
 */
function showGameOverScreen() {
    let gameOverScreen = docID('game-over');
    gameOverScreen.classList.remove('d-none');
}

/**
 * Restarts the game by reloading the window.
 */
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

function toggleInfoBox() {
    let infoBox = docID('info-box');
    infoBox.classList.toggle('d-none');
}

/**
 * checks the orientation
 * @returns true if orientation is in landscape, false if not
 */
function checkOrientation() {
    return (window.innerWidth < window.innerHeight);
}

window.addEventListener('resize', () => {
    const landscapeElement = docID('landscape');
    const container = docID('container');
    if (checkOrientation()) {
        landscapeElement.classList.remove('d-none');
        if (!container.classList.contains('d-none')) {
            container.classList.add('d-none');
        }
    } else {
        landscapeElement.classList.add('d-none');
        if (container.classList.contains('d-none')) {
            container.classList.remove('d-none');
        }
    }
});

/**
 * Displays the game over screen and clears all intervals after a delay.
 */
function gameOver() {
    showGameOverScreen();
    setTimeout(() => {
        clearAllIntervals();

    }, 500);
}
