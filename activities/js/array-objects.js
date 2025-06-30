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

const fruitNames = fruits.map(fruits => fruits.name);
const fruitColors = fruits.map(fruits => fruits.color);
console.log(fruitNames);
console.log(fruitColors);