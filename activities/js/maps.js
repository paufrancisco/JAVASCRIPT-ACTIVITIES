const numbers = [1,2,3,4,5];
const squares = numbers.map(square);
const cube = numbers.map(numberCube);

console.log(squares, typeof squares);
console.log(cube, typeof cube);


function square(element){
    return Math.pow(element, 2);
}


function numberCube(element){
    return Math.pow(element, 3);
}

function addLetter(element){
    return element+"Mema";
}