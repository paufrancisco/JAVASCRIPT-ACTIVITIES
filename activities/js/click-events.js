const myBox = document.getElementById('myBox');
const myBtn = document.getElementById('myBtn');

myBtn.addEventListener("click", function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "ouch";
});

myBtn.addEventListener("mouseover", event =>{
    event.target.style.backgroundColor = "blue";
})

myBtn.addEventListener("mouseleave", event =>{
    event.target.style.backgroundColor = "green";
})