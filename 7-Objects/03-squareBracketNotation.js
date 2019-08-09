// SQUARE BRACKET NOTATION

// Square bracket notation can help us be able to find a value in an object. This way can be handy if we need to set a key to a variable and then use that variable to parse through an object
// It works because of the fact that all property keys( before the colon) are strings

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    "water": true,
    sun: true,
    size: 10
};

// console.log(garden.vegetable);
// let x = 'vegetable';
// console.log(garden.x, garden[x]);  //garden.x doesn't work because there is no 'x' in the original Object. garden[x] does work due to the value 'x' which is defined as 'vegetable' is being searched for in the object.

// let baking = {};
// baking['zucchini'] = 'better make some bread!'; // We can also set a key/value pair with square brackets.
// // console.log(baking); //{ zucchini: 'better make some bread!' }

// // console.log(baking.garden.vegetable); //ERROR
// // console.log(baking[garden['vegetable']]);
// console.log(garden['vegetable']); // --> zucchini
// console.log(baking['zucchini']);

let key = 'water';

Object.keys(garden).forEach(g => {
    // console.log(g);
    if(key === g) {
        console.log(garden[key]);
    }
})