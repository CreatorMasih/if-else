/*question 3
Write a program to take 4 numbers from the user and output the third max of these 4 numbers.*/
const input = require("readline-sync")
let a = input.question ("Enter any number")
let b = input.question ("Enter any number")
let c = input.question ("Enter any number")
let d = input.question ("Enter any number")

if (a<b && a<c && a>d || a<b && a<d && a>c || a<c && a<d && a>b)               //check for a Is it third max
  {console.log(a);
  } else if (b<a && b<c && b>d || b<a && b<d && b>c || b<c && b<d && b>a)      //check for b is it thired max
  {     
  console.log(b);}
  else if (c<a && c<b && c>d || c<a && c<d && c>b || c<b && c<d && c>a){       //check for c is it third max
      console.log(c)
  }
  else{
      console.log(d)                                                           //no one is third max then d is third max
  }


  /* In this code I usses Logical operator such as
  and operator and or operator */