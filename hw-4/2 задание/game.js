let game = {
    run() {
        while (true) {
            const direction = mover.GetDirection();
            if (direction === null) {
                console.log("Игра окончена.");
                return;
            }
            const NextPoint = mover.GetNextPosition(direction);
            renderer.clear();
            player.move(NextPoint);
            renderer.render();
        }
    },

    init() {
        console.log("Ваше положение на поле в виде о");
        renderer.render();
        console.log("Чтобы начать игру, наберите game.run() и нажмите Enter")
    },
};

game.init();