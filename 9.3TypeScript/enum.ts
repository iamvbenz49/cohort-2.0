enum Direction {
    Up,
    Down,
    Left,
    Right
}

enum ResponseStatus {
    NotFound = 400,
    Sucess = 200,
    ServerError = 500
}

function doSomething(keyPressed: Direction) {
    if(keyPressed == Direction.Up) {
        console.log("move up");
    }
    return keyPressed;
}
doSomething(Direction.Up)  