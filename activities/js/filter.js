let numbers = [1,2,3,4,5,6,7,8,9,10];
let even = numbers.filter(isEven);
let odd = numbers.filter(isOdd);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 3 === 0;
}

console.log(even);
console.log(odd);
 

const words = ["apple", "orange", "bananas", "coconut", "123456"];
const sixLetter = words.filter(filter6words);

function filter6words(element){
    return element.length < 6 ? true : false;
}


console.log(sixLetter);
