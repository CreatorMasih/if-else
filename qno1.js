/*question no 1
Write a program to take three numbers from the user and print the greater number of the three numbers.
 (Assume all three numbers are distinct)*/

 const input = require("readline-sync")
 let a = input.question("enter the number: ")
 let b = input.question("enter the number: ")
 let c = input.question("enter the number: ")

 if (a>b) {
     console.log(a);                          // enter the greater number
 }else if (b>c){
     console.log(b);                          //enter the greater number 
 }else {
     console.log(c);                          // enter the greater number 
 }