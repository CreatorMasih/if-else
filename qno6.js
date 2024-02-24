/*question 6
Write a program to take two numbers from the user as input and obtain the HCF and LCM of the two numbers.*/

const input=require("readline-sync")
let a =input.questionInt("Enter number you want")
let b =input.questionInt("Enter number you want")
let r = 0;
let l = 0;
let s = 0;
let lcm = 0;
let hcf = 0;
if(a>b){                                                       //compare which is greater whici is smaller
    l = a;                                                     //store it in l   
    s = b;                                                     //store it in s
}else{       
    l = b;                                                    //store
    s = a;                                                    //store
}
r = (l % s)                                                   //do l modules s

while(r != 0){                                               //check r is equal to 0 or not
    l = s
    s = r 
    r = l % s
}
hcf = s                                                    //hcf is equal to s
lcm = (a*b) / hcf                                          //put formula to find lcm

console.log(lcm + "is lcm")                                //print
console.log(hcf + "is lcf")