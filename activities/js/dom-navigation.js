const element = document.getElementById('fruits');
const firstChild = element.firstElementChild;

firstChild.style.backgroundColor = "yellow";

console.log(element); 

const ulElements = document.querySelectorAll('ul');
ulElements.forEach(ulElements =>{
    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
})

console.log(ulElements);