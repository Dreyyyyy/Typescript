//Types of variables on Typescript

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = ['a', 0, true];

/*In Typescript we have the "enum" variable that can be very handy
to some types of codes, like the block bellow: */

enum Color { Red, Green, Blue };

/*When use a "enum" variable, you can just type the propperty that you want
like that: */

Color.Blue;

/*"enum" doesn't exist in Javascript, and a implementation like that will have
much more lines of code*/