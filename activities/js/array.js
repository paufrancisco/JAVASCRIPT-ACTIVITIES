let newFruit;
const btnAdd = document.getElementById('btn-add');
const fruitList = document.getElementById('list');


let fruits = [];

btnAdd.onclick = function(){
    newFruit = document.getElementById('add').value; 
    if (newFruit!==""){
        fruits.push(newFruit); 
        fruitList.innerHTML = `List of fruits: ${fruits}<br> No. of fruits : ${fruits.length}`;
        document.getElementById('add').value = '';
        let index = fruits.indexOf("apple");
        console.log(index);
    }else{
        fruitList.innerHTML = `Please enter fruit`; 
    }
    
}



let hardwares = ['mouse','keyboard','monitor'];

for(i in hardwares){
    console.log(hardwares[i]);
}