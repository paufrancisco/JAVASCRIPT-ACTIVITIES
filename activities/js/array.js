let newFruit;
const btnAdd = document.getElementById('btn-add');
const fruitList = document.getElementById('list');


let fruits = [];

btnAdd.onclick = function(){
    newFruit = document.getElementById('add').value; 
    fruits.push(newFruit); 
    fruitList.innerHTML = `List of fruits: ${fruits}<br> No. of fruits : ${fruits.length}`;
    document.getElementById('add').value = '';
}

