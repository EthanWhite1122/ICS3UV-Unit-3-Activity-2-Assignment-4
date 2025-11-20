/**
 * @author Ethan White
 * @version 1.0.0
 * @date 2025-11-19
 * @fileoverview This program will find the interest rate over 10 years
 */

//create variables
const years=10;
let amount: string;
let intrest: string;

//input
amount= prompt("Please type in the money you would be putting into the bank")||("0")
let initialamount=Number(amount)

intrest= prompt("Please inout the current interest rate")||("0")
let rate1 = Number(intrest)
let rate = rate1/100
//calculate
let year1_interest = initialamount * rate;
let year1_total = initialamount + year1_interest;
let year2_interest = year1_total * rate;
let year2_total = year1_total + year2_interest;
let year3_interest = year2_total * rate;
let year3_total = year2_total + year3_interest;
let year4_interest = year3_total * rate;
let year4_total = year3_total + year4_interest;
let year5_interest = year4_total * rate;
let year5_total = year4_total + year5_interest;
let year6_interest = year5_total * rate;
let year6_total = year5_total + year6_interest;
let year7_interest = year6_total * rate;
let year7_total = year6_total + year7_interest;
let year8_interest = year7_total * rate;
let year8_total = year7_total + year8_interest;
let year9_interest = year8_total * rate;
let year9_total = year8_total + year9_interest;
let year10_interest = year9_total * rate;
let year10_total = year9_total + year10_interest;

//print
console.log("Year".padEnd(6) + "Initial".padStart(12) + "Interest".padStart(12) + "Total".padStart(12));
console.log("------------------------------------------------------------");

console.log("1".padEnd(6) + initialamount.toFixed(2).padStart(12) + year1_interest.toFixed(2).padStart(12) + year1_total.toFixed(2).padStart(12));
console.log("2".padEnd(6) + initialamount.toFixed(2).padStart(12) + year2_interest.toFixed(2).padStart(12) + year2_total.toFixed(2).padStart(12));
console.log("3".padEnd(6) + initialamount.toFixed(2).padStart(12) + year3_interest.toFixed(2).padStart(12) + year3_total.toFixed(2).padStart(12));
console.log("4".padEnd(6) + initialamount.toFixed(2).padStart(12) + year4_interest.toFixed(2).padStart(12) + year4_total.toFixed(2).padStart(12));
console.log("5".padEnd(6) + initialamount.toFixed(2).padStart(12) + year5_interest.toFixed(2).padStart(12) + year5_total.toFixed(2).padStart(12));
console.log("6".padEnd(6) + initialamount.toFixed(2).padStart(12) + year6_interest.toFixed(2).padStart(12) + year6_total.toFixed(2).padStart(12));
console.log("7".padEnd(6) + initialamount.toFixed(2).padStart(12) + year7_interest.toFixed(2).padStart(12) + year7_total.toFixed(2).padStart(12));
console.log("8".padEnd(6) + initialamount.toFixed(2).padStart(12) + year8_interest.toFixed(2).padStart(12) + year8_total.toFixed(2).padStart(12));
console.log("9".padEnd(6) + initialamount.toFixed(2).padStart(12) + year9_interest.toFixed(2).padStart(12) + year9_total.toFixed(2).padStart(12));
console.log("10".padEnd(6) + initialamount.toFixed(2).padStart(12) + year10_interest.toFixed(2).padStart(12) + year10_total.toFixed(2).padStart(12));


console.log("\nDone.");