export class Point2 { 
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