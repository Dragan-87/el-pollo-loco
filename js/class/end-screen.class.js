class EndScreen extends DrawableObject {
    END_IMAGES = [
        "img/9_intro_outro_screens/game_over/game over!.png",
        "img/9_intro_outro_screens/game_over/game over.png",
        "img/9_intro_outro_screens/game_over/oh no you lost!.png",
        "img/9_intro_outro_screens/game_over/you lost.png"
    ];

    constructor() {
        super("img/9_intro_outro_screens/game_over/game over!.png", 0);
        this.loadImages(this.END_IMAGES);
        this.x = 0;
        this.y = 0;
        this.width = 720;
        this.height = 480;
    }
}
