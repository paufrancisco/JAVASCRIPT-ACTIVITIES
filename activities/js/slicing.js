const fullName = "Paulo Faustiniel Angelo L. Francisco";

let firstName = fullName.slice(0,5);
let lastName = fullName.slice(27,fullName.length);
let lastF = fullName.lastIndexOf("F");
let split = fullName.split(" ");
let splitFirstName = split[0];
let splitSecondName = split[1];
let splitThirdName = split[2];
let splitFourthName = split[3];
let splitFifthName = split[4];

console.log(fullName);
console.log(firstName);
console.log(lastF);
console.log(lastName);


console.log(splitFirstName);
console.log(splitSecondName);
console.log(splitThirdName);
console.log(splitFourthName);
console.log(splitFifthName);