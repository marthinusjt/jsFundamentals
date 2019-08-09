/********************
RETURN
********************/

// let hi = () => {
//     return 'hi';
//     //(1)
// };

// let newName = hi();
//     //2        (3)

// console.log(newName);

//1 = The keyword that brings our data out of our function
//2 = We need a new variable to hold the value of the return
//3 = When called, the function becomes the value of the return


// let capitalizedName = (name) => {
//     let capName = '';
//     for(let letter in name) {
//         if(letter == 0){
//             capName += name[letter].toUpperCase();
//         } else {
//             capName += name[letter].toLowerCase();
//         }
//     }
//     return capName;
// }

// // console.log(capName); error, not defined

// const myName = capitalizedName('marthinus');
// console.log(myName+ ' how are you doing?');

/*
Challenge:
Make a tip calculator using a function
Have it RETURN the value 
Capture that returned value in a VARIABLE
Print that variable
*/
function tipCalc(cost, tipPercent) {
    let tip = tipPercent * 0.01;
    let totalTip = cost * tip;
    let totalFinal = totalTip + cost;
    console.log(`You are about to tip $${totalTip}, with your total bill being $${totalFinal}`);
    return totalFinal;
}

tipCalc(300, 10);

let tipCalcs = (price) => {
   let tipPerc = 0.15;
   let tip = price*tipPerc;
   return tip;
}
let tipDinner = tipCalcs(80.86);
console.log(`$${tipDinner} tip`);