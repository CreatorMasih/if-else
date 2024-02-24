/*question 8
Write a program to take N numbers from a user as input, and print the maximum and minimum values among the given set of N numbers. 
Also, take N from the user as input.*/


const input =require("readline-sync")
let n =input.questionInt("enter how many numbers you have")
let a =input.questionInt("enter number")
let max = a
let min = a
let i = 2
while(i <= n){
    let b =input.questionInt("enter your next number")
    if(max < b){
        max = b;
    }else if(min > b){
        min = b;
    } i++
    }console.log("MAX IS " + max)
     console.log("MIN IS " + min)
    





