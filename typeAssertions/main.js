/*When you declare a variable without explicit it type, Typescript will assume that as a
"any" type variable, and you won't get the sugestions for a specific type on a IDE. For solve
this we'll use type assumptions (that doesn't change the variable type in memory): */
var phrase;
phrase: "Test";
var endsWithT = phrase.endsWith('t');
var alternativeWay = phrase.endsWith('t');
