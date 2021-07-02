let mover = {
    GetDirection() {
        const AvailableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt("Введите число [1, 2, 3, 4, 6, 7, 8, 9] для перемещения по полю. 'Отмена' для выхода."));
            if (isNaN(direction)) {
                return null;
            }
            if (!AvailableDirections.includes(direction)) {
                console.log("Для перемещения необходисо ввести число [1, 2, 3, 4, 6, 7, 8, 9]");
                continue;
            }
            return direction;
        }
    },

    GetNextPosition(direction) {
        const NextPosition = {
            x: player.x,
            y: player.y,
        };
        switch (direction) {
            case 1:
                NextPosition.x--;
                NextPosition.y++;
                break;
            case 2:
                NextPosition.y++;
                break;
            case 3:
                NextPosition.x++;
                NextPosition.y++;
                break;
            case 4:
                NextPosition.x--;
                break;
            case 6:
                NextPosition.x++;
                break;
            case 7:
                NextPosition.x--;
                NextPosition.y--;
                break;
            case 8:
                NextPosition.y--;
                break;
            case 9:
                NextPosition.x++;
                NextPosition.y--;
                break;
        }
        if (NextPosition.x < 0 || NextPosition.x > 9 || NextPosition.y < 0 || NextPosition.y > 9) {
            NextPosition.x = player.x;
            NextPosition.y = player.y;
        }
        return NextPosition;
    }
};
