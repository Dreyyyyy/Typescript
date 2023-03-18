class Point {
    x: Number;
    y: Number;

    draw() {
        console.log("X: " + this.x + ", Y: "+  this.y);
    }

    getDistance(another: Point) {
        // ...
    }
}

//This is a object, a instance of a class
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();

