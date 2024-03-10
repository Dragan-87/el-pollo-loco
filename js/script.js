let canves;
let character = new MoveableObject(20, 20, "img/2_character_pepe/1_idle/idle/I-1.png");
let ctx;

function init() {
    canves = document.getElementById('canves');
    ctx = canves.getContext('2d');
    setTimeout(() => {
        // ctx.drawImage(character.img, character.objetctPositionX, character.objetctPositionY, 150, 100);
    }, 1000)
}
