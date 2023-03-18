/* We can use properties to give access to read and write on fields of a 
class, and with a cleaner code*/

class Point2 { 
    constructor(private x ?: number, private y ?: number) {

    }

    draw() {
        console.log("X: " + this.x + ", Y: "+  this.y);
    }

    get X() {
        return this.x;
    }

    set X(value) {
        this.x = value;
    }
}

let point2 = new Point2();
point2.X = 2;
point2.X;
point2.draw();