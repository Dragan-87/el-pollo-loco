let coinSound = new Audio("./audio/coin/coin-sound.mp3");
let pepeJumpSound = new Audio("./audio/pepe/pepe-jump.mp3");
let pepeSleepSound = new Audio("./audio/pepe/pepe-sleep.mp3");
let pepeWalkingSound = new Audio("./audio/pepe/walking-short.mp3");
let pepeHurtsSound = new Audio("./audio/pepe/pepe-get-dmg.mp3");
let bottleSound = new Audio("./audio/bottle/get-bottle.mp3");
let backgroundMusic = new Audio("./audio/background-music/background-music-2.mp3");
let chickenSound1 = new Audio("./audio/enemy/normal_chicken/chicken-1.mp3");
let chickenSound2 = new Audio("./audio/enemy/normal_chicken/chicken-2.mp3");
let isMuted = false;

function toggleSound() {
    coinSound.muted = !coinSound.muted;
    pepeJumpSound.muted = !pepeJumpSound.muted;
    pepeSleepSound.muted = !pepeSleepSound.muted;
    pepeWalkingSound.muted = !pepeWalkingSound.muted;
    pepeHurtsSound.muted = !pepeHurtsSound.muted;
    bottleSound.muted = !bottleSound.muted;
    backgroundMusic.muted = !backgroundMusic.muted;
    chickenSound1.muted = !chickenSound1.muted;
    chickenSound2.muted = !chickenSound2.muted;
    isMuted = !isMuted ? true : false;
    docID("mute-sound").src = !isMuted ? './img/icons/play-sound.png' : './img/icons/mute-sound.png';
}
