/********************
FAT ARROW FUNCTIONS
********************/

let hi = () => {
//    (1)   (2)
    console.log('hello!')
}

hi();

// -> NOT THE SAME AS =>
//1 - We need to set the fat arrow function to a variable
//2 - We use the 'fat arrow' to signify its a function

// Block Body
// ******************
let hi = () => {
    console.log('hi!')
}

let apples = x => {
    console.log(`There are ${x} apples in the basket.`);
}
apples(10);
// Concise Body
// ******************
let hi = () => console.log('hi');

let apples = x => console.log(`There are ${x} apples in the basket.`);

apples(10);
//More than one parameter will require parenthesis
//Return (if on-line fat arrow function) is implied

//Line breaks do matter for fat arrow functions. HAS to be on one line.

let func = () => console.log('hi'); //this works

// let func = ()
//     => console.log('hi');  //not ok