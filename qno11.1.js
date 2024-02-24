/*Write a program to take value N from the user and print the following pattern based on the user input.
1) N=5
*
* *
* * *
* * * *
* * * * *
*/

const input=require("readline-sync")
let n =input.questionInt("Enter any number")
let i = 1;
let j = 1;

while(i<=n){
    let p = ''
    let j = 1
    while(j<=i){
        p = p +'*'
        
        j++
    }
    {
        
        i++
        console.log(p);
    }
}