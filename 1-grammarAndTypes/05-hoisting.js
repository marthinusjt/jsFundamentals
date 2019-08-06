//Hoisting

//Hoisting does not exist. It is an illusion. Code doesn't actually get moved.
//JS reads through code twice remembering left hand side of variables and functions.

console.log(scissors);

scissors = 'blue';

console.log(scissors);

var scissors;

b();
console.log(a);

function b(){
    console.log('this is all hoisted!');
}

var a = 'This is not hoisted';