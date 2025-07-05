const myButton = document.getElementById('myButton');

myButton.classList.add("enabled");
myButton.classList.remove("enabled");

myButton.addEventListener("mouseover", event=>{
    event.target.classList.add('hover');
})