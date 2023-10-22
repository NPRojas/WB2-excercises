"use strict"

const hoursWorked = 45;
const hourlyWage = 10;
const weeklyPay = hourlyWage * hoursWorked;
const annualPay = weeklyPay * 52;
const fillingStatus = "single";
let taxRate = null;

if (fillingStatus == "single") {

    if(annualPay >= 75000){
        taxRate = 0.2;
    } else if (annualPay >= 25000 && annualPay <= 74999.99) {
        taxRate = 0.15;
    } else if (annualPay >= 12000 && annualPay <= 24999.99) {
        taxRate = 0.10;
    } else {
        taxRate = 0.05;
    }
} else if (fillingStatus == "joint") {

    if(annualPay >= 75000){
        taxRate = 0.2;
    } else if (annualPay >= 25000 && annualPay <= 74999.99) {
        taxRate = 0.11;
    } else if (annualPay >= 12000 && annualPay <= 24999.99) {
        taxRate = 0.60;
    } else {
        taxRate = 0.00;
    }

} else {
    console.log("We do not recongize this filling status");
}

const annualTaxesOwed = annualPay * taxRate;
const weeklyTaxesOwed = annualTaxesOwed/52;

console.log(`You worked ${hoursWorked} hours this period. 
\nBecause you earn $${hourlyWage} per hour, your gross pay is $${weeklyPay}.
\nYour filing state is ${fillingStatus}.
\nYour tax witholdings this period is $${weeklyTaxesOwed}.
\nYour net pay is $${weeklyPay}.`);