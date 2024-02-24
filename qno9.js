/*question 9
Write a program to take N numbers from a user as input, and print the second maximum number among the given set of N numbers.
Also, take N from the user as input.*/

const input =require("readline-sync")
let n = input.questionInt("Enter how many numbers you have")
let a = input.questionInt("Enter any number")
let b = input.questionInt("Enter any number")
let i = 3
let max2 = 0

    if(a>b){
         max = a
         max2 = b
     }    
    else
    {
    max = b
    max2 = a 
    }
    while(i <= n){
         let c = input.questionInt("Enter the next number :")
    if(c > max)
    {
         max2 = max                                                                      
         max = c 
    } 
    else if(c > max2)
    {
         max2 = c
    } 
         i++
    }
    console.log(max2 + " is max2")    


