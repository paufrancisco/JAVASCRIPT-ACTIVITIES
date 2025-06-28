let name = 'paulo';
let email = `francisco.paulo.pf@gmail.com`;
let num = 24;
name = name[0].toUpperCase() + name.slice(1);

let age = 29;
let grades = [1,2,3,4,5];

let sum = 0;

function getTheSum(grades){
  
    for(let i in grades){
        sum+=grades[i];
    } 
    console.log(`Grades: ${grades}`);
    return sum; 
}


function happybirthday(name,age){
    console.log(`Happy Birthday ${name}!`);
    console.log(`Age: ${age}`);
}

function evenoddfilter(num){
    if(num % 2 == 0){
        console.log(`Even: ${num}`);
    }else{
        console.log(`Odd: ${num}`);
    }
}


function isValidEmail(email){
    if(email.includes("@")){
        console.log(`${email} is valid`);
    }else{
        console.log(`${email} is invalid`);
    }
}


let sumWithkeme = getTheSum(grades);

console.log(`Grades with keme: ${sumWithkeme}`);


getTheSum(grades); 

happybirthday(name,age);

evenoddfilter(num);

isValidEmail(email);