let x;
x = 123;

let price = 99; 
let firstName = "Paulo"
let lastName = "Francisco"
let email = "Bro@gmail.com"
let online = true;

let age = 25;
console.log(x);
console.log(price);
console.log(age);

console.log(`You are ${age} years old`); 
console.log(`The price is ${price}`);
console.log(`I'm ${firstName} ${lastName}`);
console.log(`${email}`);

if(age>18){
    console.log("Legal age");
    console.log(typeof age);
}else{
    console.log("Not approved");
}


let fullName = 'Paulo Francisco'
let isStudent = false;

document.getElementById('p1').textContent = fullName;
document.getElementById('p2').textContent = `You are ${age} years old`;
document.getElementById('p3').textContent = isStudent;