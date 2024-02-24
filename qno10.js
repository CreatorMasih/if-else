/*question 10(I)
Write a program to print the sum of a given number of terms (N) for a given value of X in the following mathematical series: 
(Input X and N from the user)
1) X+(X^2)/2+(X^3)/3+(X^4)/4 ....upto N terms*/


const input=require("readline-sync")
let n =input.questionInt("enter how many numbers you have =")
let x =input.questionInt("enter value of x =")


let i = 1;
let sum = 0;
while(i<=n){
    sum = sum + (x**i)/i 
    i++
}
console.log("The sum of the series is = " + sum);
