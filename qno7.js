/*question 7
Write a program to take a number from the user and then determine if that number is a special type of number called a 'perfect number'.
A perfect number is a number where the sum of all its factors (excluding the number itself) is equal to the number itself.
Print Yes if the number is a perfect number else print No.*/



const input=require("readline-sync")
let n =input.questionInt("Enter any number")

let i = 1
let sum = 0
while(i<n){
    if(n%i == 0){
        sum = sum + i
    }
    i++
}
if(n == sum){
    console.log("yes")
}else{
    console.log("No")
}