let canves;
let character = new Image();
let ctx;

function init() {
    canves = document.getElementById('canves');
    ctx = canves.getContext('2d');
    character.src = '../img/1.Sharkie/1.IDLE/1.png';
    setTimeout(() => {
        ctx.drawImage(character, 0, 0, 50, 50);
    }, 1000)
}
