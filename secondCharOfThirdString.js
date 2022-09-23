

const prompt = require('prompt-sync')({sigint: true});
let askArray = JSON.parse(prompt("Enter any array: "));

let x = askArray[2][1];
let y = "str'"

if ((typeof x) === (typeof y)){
    console.log(x);
} else {
    console.log('error');
}







