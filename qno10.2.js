/*question 10 (II)
Write a program to print the sum of a given number of terms (N) for a given value of X in the following mathematical series: 
(Input X and N from the user)
ii) X-(X^3)/3+(X^5)/5-(X^7)/7+(X^9)/9-.... Upto N terms*/


const input =require("readline-sync")
let n =input.questionInt("enter how many numbers you have = ")
let x =input.questionInt("Enter any number")

let i = 1
let sum = 0
let j = 1

while(i <= n){
    if(i % 2 == 0){
        p = -(x**j)/j
        }else{
        p =  (x**j)/j
        }
        sum = sum + p
        i++,
        j=j+2;
}
console.log("The sum of the series is = " + sum);

