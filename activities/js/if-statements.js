let button = document.getElementById('btn-submit');
button.onclick = function(){
    let age = document.getElementById('myText'); 
    
    let result = document.getElementById('result');
    age = age.value;
    if(age>=18){
        result.textContent = "Access approved";
    }else{
         result.textContent = "Access denied";
    }
}

