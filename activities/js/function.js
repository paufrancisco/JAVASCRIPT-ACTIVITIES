let name1 = 'Paulo';
let name2 = 'paulo1';
let age = 29;
let grades = [1,2,3,4,5];

let sum =0;
function getTheSum(grades){
  
    for(let i in grades){
        sum+=grades[i];
    } 
    return sum; 
}

function happybirthday(name,age){
    console.log(`Happy birthday ${name}`);
    console.log(`You are now ${age}`);
}

getTheSum(grades);
console.log(sum);

happybirthday(name1,age);
