let num = window.prompt("Enter a number");
num += "12";
num = Number(num);
console.log(num, typeof num);

let x = "string";
let y = 1;
let z = false; 

x = String(x);
y = Number(y);
z = Boolean(z);

console.log(`x`,x, typeof x);
console.log(`y`,y, typeof y);
console.log(`z`,z,typeof z);