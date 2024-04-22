const level1 = new Level(
    [
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 0),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 720),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 720),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 720),
        new BackgroundObject('./img/5_background/layers/3_third_layer/1.png', 720*2),
        new BackgroundObject('./img/5_background/layers/2_second_layer/1.png', 720*2),
        new BackgroundObject('./img/5_background/layers/1_first_layer/1.png', 720*2),
        new BackgroundObject('./img/5_background/layers/3_third_layer/2.png', 720*3),
        new BackgroundObject('./img/5_background/layers/2_second_layer/2.png', 720*3),
        new BackgroundObject('./img/5_background/layers/1_first_layer/2.png', 720*3),
    ],
    [
        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/air.png', 719),
        new BackgroundObject('img/5_background/layers/air.png', 719*2),
        new BackgroundObject('img/5_background/layers/air.png', 719*3),
    ],
    [
        new BackgroundObject('img/9_intro_outro_screens/game_over/game over!.png', 0),
        new BackgroundObject('img/9_intro_outro_screens/game_over/game over.png', 0),
        new BackgroundObject('img/9_intro_outro_screens/game_over/oh no you lost!.png', 0),
    ]
);
