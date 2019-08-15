/****************
CALLING FUNCTIONS
****************/

// function hi() {
//     console.log('HI!');
// }

// hi();
// console.log(hi);
//[Function: hi] -- This states that we have a function named 'hi'

//This is how we call, or 'invoke' our function
//It's the START button on a machine.

/*
Challenge:
Create a function that, when invoked, lists out the numbers 1-10
*/

// function x() {
//     for(let i = 1; i <= 10; i++) {
//         console.log(i);
//     }
// }

// x();

// function oddEven(num) {
//     console.log(num);
//     if(num % 2 === 0) {
//         console.log('number is even');
//     } else {
//         console.log('number is odd');
//     }
// }

// for(let i = 0; i <= 10; i++) {
//     oddEven(i);
// }

/*
Challenge:
Given the array, create a function that lists out the values individually.
*/

// let arr = ['This', 'is', 'really', 'cool'];

// function array() {
//     for(let values of arr) {
//         console.log(values);
//     }
// }

// array();

//WHAT KIND OF Function?
let marthinus = (x) => {
    console.log(`There is ${x} marthinus in the class.`);
   }
   marthinus ('');