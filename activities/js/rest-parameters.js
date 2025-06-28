const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";


function openFridge(...foods){
    console.log(foods);
}

openFridge(food1,food2,food3,food4);

function sum(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;
}

let numbers = sum(1,2,3,4,54);
console.log(`The total is ${numbers}`);

function average(...numbers){
    let average = 0;
    for(let i of numbers){
        average+=i;
    }
    return average/numbers.length;
}
let grades = average(93,98,87,87,98);
console.log(grades);