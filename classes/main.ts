interface Point {
    x: Number,
    y: Number
}

let drawPoint = (point: Point) => {
    // ...
}

/*On oriented objects programming we have a principle called cohesion,
so you have to put all methods that are directed linked in one block
of code, but you can't put functions on a interface, so we use classes to
do that: */

class Point {
    x: Number;
    y: Number;

    draw() {
        // ...
    }

    getDistance(another: Point) {
        // ...
    }
}
