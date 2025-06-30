let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);


const colors = ["red", "green", "blue"];
[colors [0], colors[2]] = [colors[2], colors[0]];
console.log(colors);

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);


function displayProfile({name, age}){
    console.log(`name: ${name} age: ${age}`); 
} 

const person1 = {
    name: "Paulo",
    age: 29
}

const {name} = person1;
const {age} = person1;
console.log(name);
console.log(age);

displayProfile(person1);