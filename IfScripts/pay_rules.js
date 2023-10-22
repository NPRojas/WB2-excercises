"use strict"

const hoursWorked = 40;
const hourlyWage = 25.00;
const overtimeRate = 1.5;
const overtimeHours = hoursWorked - 40;
let grossPay;

if (hoursWorked >= 40) {
   let regularHoursSum = 40 * hourlyWage;
   let overtimeHoursSum = overtimeHours * (overtimeRate * hourlyWage);
   grossPay = regularHoursSum + overtimeHoursSum;}
else {
   grossPay = hoursWorked * hourlyWage;
}
  
console.log (grossPay)