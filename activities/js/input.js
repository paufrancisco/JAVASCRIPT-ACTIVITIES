document.getElementById('mySubmit').onclick = function () {
    let h1Element = document.getElementById('h1');
    let baseText = document.getElementById('h1').textContent.split(' ')[0]; 

    let userName = document.getElementById('myText').value;

 
    h1Element.textContent = baseText + " " + userName;

    document.getElementById('myText').value = "";  
}
