let canves;
let world;
let keyboard = new Keyboard();

function init() {
    canves = document.getElementById('canves');
    world = new World(canves, keyboard);
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

function startGame() {
    window.location.href = "./index.html";
}

function muteGameMusic() {
    let audio = document.getElementById('game-music');
    if (audio.muted) {
        audio.muted = false;
    } else {
        audio.muted = true;
    }
}

function createDivOverlayPreventLandscapeMode() {
    let overlayDiv = document.getElementById("LandscapeModeOverlayDiv");
    let header = document.getElementById("main-header");
    if (!overlayDiv) {
        header.classList.add("d-none");
        overlayDiv = document.createElement("div");
        overlayDiv.id = "LandscapeModeOverlayDiv";
        overlayDiv.innerHTML = createOverlayContentHTML();
        document.body.appendChild(overlayDiv);
        // verhindert das nach jedem aufruf ein <div></div> verbleibt
    } else {
        let newOverlayContentHTML = createOverlayContentHTML();
        overlayDiv.innerHTML = newOverlayContentHTML;
    }
}

window.addEventListener("resize", function () {
    let header = document.getElementById("main-header");
    if (header && header.childNodes.length > 0) {
        header.classList.remove("d-none");
        if (window.innerWidth > window.innerHeight && window.innerHeight < 500) {
            createDivOverlayPreventLandscapeMode();
        } else {
            let overlayDiv = document.getElementById("LandscapeModeOverlayDiv");
            if (overlayDiv) {
                overlayDiv.remove();
            }
        }

    }
});
