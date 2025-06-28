let name1 = 'paulo';
let name2 = 'paulo1';
let grades = [1,2,3,4,5];

let sum =0;
function happybirthday(grades){
  
    for(let i in grades){
        sum+=grades[i];
    } 
    return sum; 
}

happybirthday(grades);
console.log(sum);

happybirthday(name2);
happybirthday(name2);
happybirthday(name2);