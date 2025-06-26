
const PI = 3.14159
let radius
let circumference;

document.getElementById('calculate').onclick = function(){
 
    radius= document.getElementById('input-radius').value; 
    radius = Number(radius);
    circumference = 2*PI*radius;

    document.getElementById('h1').textContent = `The area of the circle: ${circumference}`;
    
}; 
console.log(circumference);