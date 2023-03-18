class Point {
    x: Number;
    y: Number;

    constructor(x ?: Number, y ?: Number) {

    }

    draw() {
        console.log("X: " + this.x + ", Y: "+  this.y);
    }
}

/*We can use constructors to have a cleaner code, and use the "?" character in front of
every parameter, so that can be initialized without value*/
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();

