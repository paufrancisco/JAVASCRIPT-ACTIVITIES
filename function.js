function add(num1, num2){
    let sum = num1+num2;
    return sum;
}

function sub(num1,num2){
    let diff = num1-num2;
    return diff;
}

function mul(num1, num2){
    let prod = num1 * num2
    return prod;
}

function div(num1, num2){
    let div = num1 / num2
    return div;
}



function showSum(){
    const firstNum = parseFloat(document.getElementById("1st").value);
    const secNum = parseFloat(document.getElementById("2nd").value);
    const result = add(firstNum,secNum);

    document.getElementById("result").innerText = result;
}


function showDiff(){
    const firstNum = parseFloat(document.getElementById("1st").value);
    const secNum = parseFloat(document.getElementById("2nd").value);
    const result = mul(firstNum, secNum);

    document.getElementById("result").innerText = result;
}

