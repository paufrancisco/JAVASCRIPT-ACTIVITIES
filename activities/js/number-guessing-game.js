const guess = document.getElementById('input-guess');
const submit = document.getElementById('btn-submit');

const displayAttempt = document.getElementById('attempt'); 
let attempts = 0;
minNum = 1;
maxNum = 100;
    
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

submit.onclick = function(){

   
    let enteredGuess = Number(guess.value);
    console.log(answer);

    const result = document.getElementById('res');
    if(enteredGuess == answer ){
          result.textContent = `Congrats you get the right number ${answer}`;  
    }else if(answer > enteredGuess){
        result.textContent = `Number is higher`;
        attempts++;
    }else if(answer < enteredGuess){
        result.textContent = `Number is lower`;
        attempts++;
    } 
    console.log(typeof enteredGuess);
    console.log(answer);
    console.log(`Attempts`,attempts);
    displayAttempt.textContent = `No. of attempts: ${attempts}`;
}
