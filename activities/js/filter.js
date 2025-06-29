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
 