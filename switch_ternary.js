
let num= Math.floor((Math.random() * 5))

switch (num){ 
case 0:
console.log("The first recorded zero appeared in Mesopotamia around 3 B.C");
break;
case 1:
console.log("The ancient Greeks did not consider One to be a number at all. A number, said Euclid, is an aggregate of units, so numbers began at Two.");
break;
case 2:
console.log('an interesting fact');
break;
case 3: 
console.log("We live on the 3rd planet from the sun.");
break;
default:
console.log("larger than 4");
}



// Question 2) 

//     a) for this switch statement, you will use Date().getMonth()Links to an external site.

//     b) for each case console.log someone's birthday for that month 



// For the following conditional statements, please convert it into a ternary operator: 
// Question 1) 

let person = {name: 'tony', age: 20,driver: null};
// if (person.age >= 16) {
// person.driver = 'Yes';
// } else {
// person.driver = 'No';
// }
person.age >= 16 ? person.driver = 'Yes': person.driver = 'No';

// Question 2)

// var age = 7;
// var kindergarten_eligible;
// if (age > 5) {
// kindergarten_eligible = "Old enough";
// }
// else {
// kindergarten_eligible = "Too young";
// } 
let age = 7 > 5 ? kindergarten_eligible = "Old enough": kindergarten_eligible = "Too young"; 