document.getElementById('');


document.title = "My website";
console.dir(document);

document.body.style.backgroundColor = "white";
 
const username = "Paulo";

const welcomeMsg = document.getElementById('welcome');

welcomeMsg.textContent += username === "" ? `Guest` : username;
