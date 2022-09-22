// prompts the user for an array then logs the second character in the third item in the array. 
// If the third item is not a string, log an error instead

const prompt = require('prompt-sync')({sigint: true});
let askArray = JSON.parse(prompt("Enter any array: "));

let x = askArray[2][1];
let y = "str'"

if ((typeof x) === (typeof y)){
    console.log(x);
} else {
    console.log('error');
}







