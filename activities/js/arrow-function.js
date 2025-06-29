// const nothing = () =>{};

// const hello = (name) => console.log(`Hellow ${name}`);
// hello("Paulo");


setTimeout(()=>{console.log("Hello")}, 3000);

const numbers = [1,2,3,4,5];

const squares = numbers.map((element) => {return element*2; });
const cubes = numbers.map((element) => Math.pow(element, 3));
const even = numbers.filter((element) => {return element % 2 == 0;});
const sum = numbers.reduce((accumulator, element) => {return accumulator + element });

console.log(squares);
console.log(cubes);
console.log(even);
console.log(cubes);
console.log(`Sum: ${sum}`);