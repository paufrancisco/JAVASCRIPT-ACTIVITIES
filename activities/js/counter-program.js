let result = document.getElementById('result');
let count = 0;
document.getElementById('btn-dec').onclick = function(){
    count--;
    result.textContent = count;
}

document.getElementById('btn-inc').onclick = function(){
    count++;
    result.textContent = count;
}

document.getElementById('btn-reset').onclick = function(){
    count = 0;
    result.textContent = count;
}