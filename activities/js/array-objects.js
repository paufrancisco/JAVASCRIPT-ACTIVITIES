const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "grape", color: "purple" },
  { name: "orange", color: "orange" }
];
fruits.push({name:"mema", color: "mema"} );
// console.log(fruits[4].name,fruits[4].color);

// for( i in fruits){
//     console.log(fruits[i]);
// }
// fruits.forEach(fruits => console.log(fruits.name));

// const fruitNames = fruits.map(fruits => fruits.name);
// const fruitColors = fruits.map(fruits => fruits.color);

// // console.log(fruitNames);
// // console.log(fruitColors);

// let fruit = ["apple", "orange", "banana", "coconut"];
// fruit.sort();
// console.log(fruit);

let numbers = [11,11,3,4,5];
numbers.sort((a,b) =>console.log(`this is ${a}`,`this is ${b}`,a-b));
console.log(numbers);