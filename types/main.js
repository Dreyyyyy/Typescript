//Types of variables on Typescript
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = ['a', 0, true];
/*In Typescript we have the "enum" variable that can be very handy
to some types of codes, like the block bellow: */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
/*When use a "enum" variable, you can just type the propperty that you want
like that: */
Color.Blue;
/*"enum" doesn't exist in Javascript, and a implementation like that will have
much more lines of code*/ 
