const global = document.getElementById("global");
const local = document.getElementById("local");



let name = "Global Name"; // global variable

function greet() {
  let name = "Local Name"; // local variable shadows global 
  return name;
}

greet();
console.log(name); // prints: Global Name

 
global.innerText = name;
local.innerText = greet();