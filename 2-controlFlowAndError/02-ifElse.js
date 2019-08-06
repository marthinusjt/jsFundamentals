/******************
 IF ELSE CONDITIONS
 *****************/
/*
let weather = 70;

if (weather < 70) {
    console.log('Wear a jacket!');
} else {
    console.log('No jacket needed!');
}

let weather = 70;

if (weather < 75 && weather > 55) {
    console.log('Wear a light jacket!')
} else {
    console.log('Number is not in range.')
}

let name = 'jeff';
if (name == 'Marthinus') {
    console.log('Hello, my name is', name + '.');
} else {
    console.log('Hello, is your name', name + '?');
}

*/
/*
? Challenge: 
**********
? Use this string - let name = 'aUTuMN';
? Bronze: 
Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string; 
If it is not console.log 'hey its not written correctly' 
? Silver:
If the first letter of a string is uppercase, only console.log that letter
if it is not, console.log the rest of the string Without the first letter, and change them to lowercase 
? Gold: 
If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/
//Bronze
let nameB = 'aUTuMN';
let firstLetterB = nameB.charAt(0)
if (nameB.charAt(0) == firstLetterB.toUpperCase()) {
    console.log(nameB);
} else {
    console.log('hey its not written correctly');
};

//Silver
let nameS = 'aUTuMN';
let firstLetterS = nameS.charAt(0)
let remainderS = nameS.slice(1);
if (firstLetterS == firstLetterS.toUpperCase()) {
    console.log(nameS.charAt(0));
} else {
    console.log(remainderS.toLowerCase());
};

//Gold
let nameG = 'aUTuMN';
let firstLetterG = nameG.charAt(0)
let remainderG = nameG.slice(1);
if (firstLetterG == firstLetterG.toUpperCase()) {
    console.log(firstLetterG.toUpperCase() + remainderG.toLowerCase());
} else {
    console.log(firstLetterG.toUpperCase() + remainderG.toLowerCase());
};

//Instructor Solution
let name = 'AUTuMN';

//charAt(0) -- method
//[0] -- squarebracket notation

if(name.charAt(0) === name.charAt(0).toUpperCase()){
    firstLetter = name.charAt(0) + name.slice(1).toLowerCase()
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(otherLetters);
}