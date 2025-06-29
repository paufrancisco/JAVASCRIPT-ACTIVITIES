

function hello(callback){
    console.log("Hello!");
    callback();
}
function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!");
}

function sum(callback, x,y){
    let result = x + y;
    callback(result);
}

function display(result){
    console.log(`My result ${result}`)
}

function displayDOM(result){
    document.getElementById('h1').textContent = result;
}




hello(wait);
sum(displayDOM,4,2);