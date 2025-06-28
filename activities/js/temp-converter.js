const inputTemp = document.getElementById('input-temp'); 
const btnSubmit = document.getElementById('btn-submit');
const result = document.getElementById('result');


btnSubmit.onclick = function(){

    let temp = inputTemp.value;
    temp = Number(temp);
    console.log(`Input temp: ${temp}`);

    let resultTemp;
    let methodUsed = "";
    let cel = "cel-to-fah";
    let fah = "fah-to-cel";
    let celfah = document.getElementById('cel-to-fah'); 
    let fahcel = document.getElementById('fah-to-cel'); 

    if(celfah.checked){
        resultTemp = ((9/5)*temp)+32;
        methodUsed = cel;
    }else if (fahcel.checked){
        resultTemp = (temp-32)*5/9;
        methodUsed = fah;
    }else{
        `Please choose method of conversion`;
    }

    result.textContent = `Result: ${resultTemp}`;
    console.log(`Result temp: ${resultTemp}`);
    console.log(`Input Method: ${methodUsed}`);

}