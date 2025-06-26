let result = document.getElementById('result');

document.getElementById('btn-dec').onclick = function(){
    if(result.textContent!=0){
        result.textContent -= 1;
    } 
}

document.getElementById('btn-inc').onclick = function(){
    let converted = Number(result.textContent); 
    converted +=1;
    result.textContent = converted;
}

document.getElementById('btn-reset').onclick = function(){
    result.textContent = 8;
}