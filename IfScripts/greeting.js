"use strict"

const militaryTime = 15.30; 

if (militaryTime <= 10) {
    console.log("Good Morning!");
} else if (militaryTime <= 10.00 && militaryTime >= 16.59) {
    console.log("Good day!");
} else {
    console.log("Good Evening!");
}