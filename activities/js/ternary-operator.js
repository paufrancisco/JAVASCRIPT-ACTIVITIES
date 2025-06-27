let age = 18; 
let res = age >= 18 ? `Legal Age` : `Under Age`; 
console.log(res);

let time = 9;
let timeResult = time > 12 ? `Good Evening ` : `Good Morning`;  
console.log(timeResult);

let purchaseAmount = 90;

let delivery = purchaseAmount >= 100 ? `Free delivery` : `Delivery fee 30`;
console.log(delivery);


let discount10 = purchaseAmount - purchaseAmount*1/10
let discount = purchaseAmount >= 100 ? `With discount ${discount10}` : `No discount ${purchaseAmount}`;
console.log(discount);