const numbers = [1,2,3,4,5];
const squares = numbers.map(square);
const cube = numbers.map(numberCube);
const withLetter = numbers.map(addLetter);

console.log(squares, typeof squares);
console.log(cube, typeof cube);
console.log(withLetter, typeof withLetter);

function square(element){
    return Math.pow(element, 2);
}


function numberCube(element){
    return Math.pow(element, 3);
}

function addLetter(element){
    return element*3 + "Mema";
}




const fruits = ["Banana", "Apple", "Orange"];
const withLabel = fruits.map(addSomething);

displayFruits(withLabel);


function addSomething(element){
    return "Fruits: " + element;
}

function displayFruits(element){
    console.log(element);
}