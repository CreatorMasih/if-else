/*question 4
Write a program to check whether a number is palindrome or not.

Note: A palindrome is a sequence of characters (or numbers) that reads the same
forwards as it does backwards. In other words, it remains unchanged when reversed.
*/


const input =require("readline-sync")
let n =input.questionInt("Enter any number")
let reversenumber = 0;                                          //take one variable reverse number  = 0
let g=n                                                         //g = number entered by user
while(n>0){                                                     //check n is greater than 0
    let digit = n%10                                            //get last digit number of entered number
    reversenumber = reversenumber * 10 + digit;                 //reverse number = reverse number * 10 + last digit number                  
    n = Math.floor(n/10)                                        //by doing interdivision you will get its first number in loop
}
if(g == reversenumber){                                         //check number entered is equal to  reverse number                                        
    console.log(n + "is a palindrome number")                   //if yes print it's palindrome  
}else{
    console.log(n + 'is not a palindrome number')              // else print it's not a palindrome
}
