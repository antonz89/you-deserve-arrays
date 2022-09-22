
const prompt = require('prompt-sync')({sigint: true});
let askArray = JSON.parse(prompt("Enter any array: "));

let x = askArray.length;

if (x<4){
    console.log(askArray[askArray.length-1]);
} else {
    console.log(askArray[3]);
}





