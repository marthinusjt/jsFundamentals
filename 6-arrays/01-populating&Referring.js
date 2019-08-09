// ARRAYS

//Arrays are containers that hold lists of items of various dataTypes.

// let list = [ 'item1', 'item2', 'item3'];
// //  (1)   (2)   (3)

// //1 - name of the Array, or list;
// //2 - The Array is inside of these square brackets
// //3 - each item, regardless of datatype, is separated by commas

// console.log(list[1]);

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Josh', 'Eric', 'Sam']];

/*
Challenge:
Go into the nested array and get 'Sam'
print out "Hellp Sam, how are you today?"
*/
let name = students[6][2];
console.log(`Hello ${name}, how are you today?`)

// console.log(typeof students); //object
console.log(students instanceof Array); //'instanceof' is a boolean - true

//Populating

// let food = ['Spaghetti', 'Linguini', 'Chicken Wings', 'Pizza', 'Popcorn'];

// food.push('Tacos');
// food.splice(1, 1, 'Bananas');
// food.splice(2, 0, 'Sweet Potato Pie');
// food.pop(); //removes last index
// food.shift(); //removes first index
// food.unshift('Fruit Snacks'); //inserts new value in index 0

// for (pasta of food) {
//     console.log(pasta);
// };
