/*question no 2
Write a program to take four numbers from the user and print the greater number of the four numbers.
 (assume all the numbers are distinct).*/

 const input = require("readline-sync")
 let a = input.question("enter any number")
 let b = input.question("enter any number")
 let c = input.question("enter any number")
 let d = input.question("enter any number")

 if(a>b){
    console.log(a);                       //print greater number if condition is true
 }else if(b>c){                            //if false come to this     
    console.log(b);                       //print greater number if the condition is true
 }else if (c>d){                           //if false come to this
    console.log(c);                       //print greater number if the condition is true
 } else{
    console.log(d);                       //if al were false print this
 }
