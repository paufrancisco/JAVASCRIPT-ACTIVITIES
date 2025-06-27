const agree = document.getElementById('agree');

const small = document.getElementById('small-btn');
const medium = document.getElementById('medium-btn');
const large = document.getElementById('large-btn');

const submit = document.getElementById('submit');

const subResult = document.getElementById('submit-res');
const sizeResult = document.getElementById('size-res');



submit.onclick = function(){


    agree.checked ? subResult.textContent = `You are agree in terms and condition`  :  subResult.textContent = `Please check in agree in terms`;

 
    // if(agree.checked){
    //     subResult.textContent = `You are agree in terms and condition`; 
    // }else{
    //     subResult.textContent = `Please check in agree in terms and condition`;
    // }

    if(small.checked){
        sizeResult.textContent = `You select Small`;
    }
    else if(medium.checked){
        sizeResult.textContent = `You select Medium`;
    }
    else if(large.checked){
        sizeResult.textContent = `You select Large`;
    }else{
        sizeResult.textContent = `Please select size`;
    }
     
}