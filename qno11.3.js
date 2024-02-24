const input=require("readline-sync")
let n =input.question("Enter any number")

let i = n
let j = 1

while(i>=1){
    let p = ''
    let j = 1
    while(j<=i){
        p = p + '* '
        j++
    }
        
        console.log(p);
        i--
    
}