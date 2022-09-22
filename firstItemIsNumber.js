//-- prompts the user for an array then logs out a boolean 
//-- indicating whether or not the first item in the array is a number

const prompt = require('prompt-sync')({sigint: true});
let askArray = JSON.parse(prompt("Enter any array: "));
let x = (typeof 1);


console.log((typeof askArray[0])===x);