let attempts = 0
let guess;
let running = true;

while(running){

    const minNum = 1;
    const maxNum = 4;
    const answer = Math.floor(Math.random()*(maxNum-minNum)+1);
    if(answer === 3){
        running = false;
    }
    attempts++;
    console.log(`Attempts: `,attempts,`Answer: `,answer); 
}
