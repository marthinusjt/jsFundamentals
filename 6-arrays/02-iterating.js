// Iterating

//forEach() method executes a provided function once for each array element.

//forEach() has three arguments: currentValue, the index, and the entire array.
//currentValue = the current element being processed in the array
//index = the index of the current element being processed
//array = the array the forEach method was called upon

// let food = ['Spaghetti', 'Linguini', 'Chicken Wings', 'Pizza', 'Popcorn'];

// food.forEach(f => {console.log(f)});

// food.forEach((f, number) => {console.log(f, number)});

// food.forEach((f, number, array) => {console.log(f, number, array)});

let movies = ['Spider-Man: Homecoming', 'Terminator', 'Footloose', 'Batman'];
movies.push('Avengers');
movies.splice(2, 1, 'Spider-Man: Far From Home');

movies.forEach((movies, number, array) => {console.log(number, array)});