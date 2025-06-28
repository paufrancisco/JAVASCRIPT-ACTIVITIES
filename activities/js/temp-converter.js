const inputTemp = document.getElementById('input-temp'); 
const btnSubmit = document.getElementById('btn-submit');
const result = document.getElementById('result');


btnSubmit.onclick = function(){

    let temp = inputTemp.value;
    temp = Number(temp);
    console.log(`Input temp: ${temp}`);

    let resultTemp;
    let methodUsed = ""; 
    let celfah = document.getElementById('cel-to-fah'); 
    let fahcel = document.getElementById('fah-to-cel'); 

    if(celfah.checked){
        resultTemp = ((9/5)*temp)+32;
        methodUsed = celfah.checked;
    }else if (fahcel.checked){
        resultTemp = (temp-32)*5/9;
        methodUsed = fahcel.checked;
    }else{
        `Please choose method of conversion`;
    }

    result.textContent = `Result: ${resultTemp}`;
    console.log(`Result temp: ${resultTemp}`);
    console.log(`Input Method: ${methodUsed}`);

}