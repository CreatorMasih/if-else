/*question 5
Write a program to check if a number is a special type of number called a 'prime number'.
 A prime number is a number that is only divisible by 1 and itself, and it doesn't have any other factors.
For example, the number 7 is a prime number because it can only be divided by 1 and 7 without leaving a remainder. 
However, the number 12 is not a prime number because it has other factors, such as 2, 3, 4, and 6, in addition to 1 and 12.
(Take the number from the user)?*/




const input =require("readline-sync")
let n = input.questionInt("Enter any number")

let i = 2;                                                              //take i = 2
let prime = true;                                                       //set prime is equal to true
while(i<n){                                                             //check i is smaller than n if true
if   (n%i == 0){                                                        //check n is divisible or not 
    prime = false; break;                                               //if condition is false break it 
}
    i++;                                                                //give increment in i
}

if(prime && n > 1){                                                     //check prime and n is greater than 1
  console.log(n + " is prime number. ")                                 //print it's prime number
}else{
    console.log(n + " is not a prime number. ")                         //otherwise it's not a prime number
}