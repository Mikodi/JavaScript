const player = {
    x: 0,
    y: 0,

    move(NextPoint) {
        this.x = NextPoint.x;
        this.y = NextPoint.y;
    },
}