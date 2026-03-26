const readline = require('readline-sync');
let firstName = readline.question("What is your first name? ");
let lastName = readline.question("What is your last name? ");
console.log ("Last, First: " + lastName + ", " + firstName);

const input = require('readline-sync');
let num1 = input.questionInt("Enter a number: ");
let num2 = input.questionInt ("Enter another number: ");
console.log(num1+num2);

