const level1 = new Level(
    [
        new Chicken("./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png"),
        new Chicken("./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png"),
        new Chicken("./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png"),
        new Endboss("./img/4_enemie_boss_chicken/1_walk/G1.png")
    ],
    [
        new Cloud("./img/5_background/layers/4_clouds/1.png", 0),
        new Cloud("./img/5_background/layers/4_clouds/1.png", 720),
        new Cloud("./img/5_background/layers/4_clouds/1.png", 1440),
    ],
    [
        new BackgroundObject("./img/5_background/layers/3_third_layer/1.png", 0),
        new BackgroundObject("./img/5_background/layers/2_second_layer/1.png", 0),
        new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", 0),
        new BackgroundObject("./img/5_background/layers/3_third_layer/2.png", 720),
        new BackgroundObject("./img/5_background/layers/2_second_layer/2.png", 720),
        new BackgroundObject("./img/5_background/layers/1_first_layer/2.png", 720),
        new BackgroundObject("./img/5_background/layers/3_third_layer/1.png", 720*2),
        new BackgroundObject("./img/5_background/layers/2_second_layer/1.png", 720*2),
        new BackgroundObject("./img/5_background/layers/1_first_layer/1.png", 720*2),
    ],
    [
        new BackgroundObject("img/5_background/layers/air.png", 0),
        new BackgroundObject("img/5_background/layers/air.png", 719),
        new BackgroundObject("img/5_background/layers/air.png", 719*2),
    ]
);