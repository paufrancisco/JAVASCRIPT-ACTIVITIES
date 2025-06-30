const myHeadings = document.getElementById('my-heading');

myHeadings.style.backgroundColor = "red";
myHeadings.style.textAlign = "center";

console.log(myHeadings);

const myFruits = document.getElementsByClassName('fruits');

// for (let i in myFruits){
//     myFruits[i].style.backgroundColor = "yellow";
// }
console.log(myFruits); 

Array.from(myFruits).forEach(myFruits =>{
    myFruits.style.backgroundColor = "blue";
})

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

for(let h4element of h4Elements){
    h4element.style.backgroundColor = "yellow";
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "blue";
}


console.log(h4Elements);