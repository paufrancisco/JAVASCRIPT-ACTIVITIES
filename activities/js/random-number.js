const min = 1;
const max = 4;  
const result = document.getElementById('result')
const roll = document.getElementById('myButton');
 

roll.onclick = function(){ 
    let randomNumber = Math.floor(Math.random()*max-min)+min ; 
    result.textContent = randomNumber; 
}