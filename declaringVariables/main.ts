/*In typescript a variable that you declare using "var" have a function scope,
while using "let" you have a block scope, although when compiled using "tsc"
to javascript, the "let" declaration will be converted to "var", because JS5
doesn't have the let declaration */

function doSomething() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('Finally: ' + i);
}

doSomething();