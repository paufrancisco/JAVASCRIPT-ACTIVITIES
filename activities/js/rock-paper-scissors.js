const choices = ["rock", "paper","scissors"];

const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');

function playGame(playerChoice){ 
    const computerChoice = choices[Math.floor(Math.random()*3)];
    console.log(computerChoice); 
    
    let result = "";
    
    if(playerChoice === computerChoice){
       result = 'Its a tie';
    }
    else if
    (playerChoice === 'paper' && computerChoice === 'rock'||
     playerChoice === 'rock' && computerChoice === 'scissors'||
     playerChoice === 'scissors' && computerChoice === 'paper'
    ) 
    {
        result = 'you win';
    }else{
        result = 'you lose';
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result; 
}