/******************
 ELSE IF CONDITIONS
 *****************/
/*
let age = 21;

 if (age <= 17) {
    console.log('Sorry, you\'re too young to do anything.');
 } else if (age > 17 && age < 21){
    console.log('Yay! You can vote!');
 } else if (age > 20 && age < 25){
    console.log('Yay! You can drink');
 } else {
    console.log('Yay! You can rent a car!');
 };
*/

 let age = 17;

 if (age >= 25) {
    console.log('Yay! You can rent a car!');
 } else if (age >= 21) {
    console.log('Yay! You can drink');
 } else if (age >= 18) {
    console.log('Yay! You can vote!');
 } else if (age <= 17) {
    console.log('Sorry, you\'re too young to do anything.');
 } else {
     console.log('Error, that\'s not a number');
 }

