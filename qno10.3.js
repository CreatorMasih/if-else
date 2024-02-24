/*question 10 (III)
Write a program to print the sum of a given number of terms (N) for a given value of X in the following mathematical series:
 (Input X and N from the user)
iii) X-(X^3)/3!+(X^5)/5!-(X^7)/7!+ ....  Upto N terms*/


const input =require("readline-sync")
let n =input.questionInt("enter how many numbers you have = ")
let x =input.questionInt("Enter any number")

let sum = 0;
let i = 1;
let j = 1;
let factorial = 1;

while (i <= n) {
    let term = 1;
    let k = 0;
    while (k < j) {
        term = term * x; 
        k++;
    }
    if (i % 2 === 0) {
        sum = sum - term / factorial;
    } else {
        sum = sum + term / factorial;
    }
     
    i++;
    j += 2; 
    factorial = factorial * (j - 1) * j; 
}

console.log("The sum of the series is: " + sum);

