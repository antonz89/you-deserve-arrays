

const prompt = require('prompt-sync')({sigint: true});
let askArray = JSON.parse(prompt("Enter any array: "));
console.log(askArray[askArray.length-1]);