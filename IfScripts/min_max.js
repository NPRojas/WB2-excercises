"use strict"
const a = 3;
const b = 2;
const c = 1;
let lowestNumber;
let highestNumber;

// to find the lowest number
if (a < c && a < b){
    lowestNumber = a;
} else if (b < a &&  b < c) {
    lowestNumber = b;
} else {
    lowestNumber = c;
}

// to the find the highest number
if (a > c && a > b){
    highestNumber = a;
} else if (b > a &&  b > c) {
    highestNumber = b;
} else {
    highestNumber = c;
}

console.log (`The lowest number of the batch is ${lowestNumber}.
\nThe highest of the batch is ${highestNumber}.`);