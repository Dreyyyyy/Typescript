/*We can use modifiers to change the access level of a field or function of a class,
if you don't declare that, will be set to public by default*/
class Point {
    private x: number;
    private y: number;

    constructor(x?: number, y?: number) {
        this.x = 0;
        this.y = 1;
    }

    draw() {
        console.log("X: " + this.x + ", Y: "+  this.y);
    }
}

let point = new Point();
point.draw();


/*We can use modifiers on constructors to have a cleaner code, so the Typescript will automatically
generate those parameters on compile*/

class Point2 {
    constructor(private x ?: number, private y ?: number) {

    }

    draw() {
        console.log("X: " + this.x + ", Y: "+  this.y);
    }
}

let point2 = new Point2();
point.draw();


