// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let even = numbers.filter(isEven);
// let odd = numbers.filter(isOdd);

// function isEven(element){
//     return element % 2 === 0;
// }

// function isOdd(element){
//     return element % 3 === 0;
// }

// console.log(even);
// console.log(odd);
 

// const words = ["apple", "orange", "bananas", "coconut", "123456"];
// const sixLetter = words.filter(filter6words);

// function filter6words(element){
//     return element.length < 6 ? true : false;
// }


// console.log(sixLetter);

// const prices = [1,2,3,4,5];

// const total = prices.reduce(sum);

// console.log(`${total}`);

// function sum(accumulator, element){ 
//     return accumulator + element;
// } 


const grades = [75,87,87,89,76,90];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}
function getMin(accumulator, element){
    return Math.min(accumulator, element);
}

 
console.log(maximum);   
console.log(minimum);   
