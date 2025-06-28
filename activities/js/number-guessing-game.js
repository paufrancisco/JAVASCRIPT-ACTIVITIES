const guess = document.getElementById('input-guess');
const submit = document.getElementById('btn-submit');

const displayAttempt = document.getElementById('attempt'); 
let attempts = 0;
minNum = 1;
maxNum = 5;
    
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(answer);
submit.onclick = function(){

   
    let enteredGuess = Number(guess.value);
    console.log(answer);

    let result = document.getElementById('res');
    if(enteredGuess == answer ){
          result.textContent = `Congrats you get the right number ${answer}`;  
    }else if(answer > enteredGuess){
        result.textContent = `Number is too low`;
        attempts++;
    }else if(answer < enteredGuess){
        result.textContent = `Number is too high`;
        attempts++;
    } 
    console.log(typeof enteredGuess);
    console.log(answer);
    console.log(`Attempts`,attempts);
    guess.value = "";
    displayAttempt.textContent = `No. of failed attempts: ${attempts}`;
}
