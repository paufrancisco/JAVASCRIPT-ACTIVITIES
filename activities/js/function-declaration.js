function hello(){
    console.log("Hello");

    // setTimeout(hello, 3000);
}

hello();

const numbers = [1,2,3,4,5,6];
const squareNumbers = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(squareNumbers);

 
const cubeNumbers = numbers.map(function(element){
    return Math.pow(element, 3);
});

console.log(squareNumbers);
console.log(cubeNumbers);