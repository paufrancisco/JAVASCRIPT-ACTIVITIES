let userName = window.prompt("Enter your username: ");

// userName = userName.trim();
// let letter = userName.charAt(0);
// let bigFirstLetter = letter.toUpperCase();

// console.log(bigFirstLetter);

// let extraChars = userName.slice(1);
// extraChars = extraChars.toLowerCase();
// userName = bigFirstLetter + extraChars;

// console.log(userName);

// METHOD CHAINING

userName = userName.trim().charAt(0).toUpperCase() +userName.trim().slice(1).toLowerCase();
console.log(userName);
