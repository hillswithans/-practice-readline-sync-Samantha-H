const input = require('readline-sync');

// Greet the user
let name = input.question("What is your name? ");
console.log("Hello, " + name + "! Let's get started!");

// Ask 5 questions (including one number)
let q1 = input.question("What month were you born? ");
let q2 = input.questionInt("What day were you born? "); 
let q3 = input.question("What city were you born in? ");
let q4 = input.question("What time were you born? ");
let q5 = input.question("Do you believe in astrology? ");

// Print the results back
console.log("\n--- Your Answers ---");
console.log("Your name: " + name);
console.log("What month were you born?: " + q1);
console.log("What day were you born?: " + q2);
console.log("What city were you born in?: " + q3);
console.log("What time were you born?: " + q4);
console.log("Do you believe in astrology?: " + q5);