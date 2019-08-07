/***************
EXPRESSIONS
***************/

//Declaration
function hi() {
   (1)   (2)  (3)
    console.log('HI!');
}

//      vs.
//Expression
let hey = function hi() {
    console.log('HI!');
}

//The variable 'hey' is now representative of the function 'hi()'

/*
Difference between declaration and expression:
Declaration gets hoisted
Expression does not
*/

// ANONYMOUS FUNCTION

let hi = function () {
    console.log('HEY!');
}