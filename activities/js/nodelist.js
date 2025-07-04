let buttons = document.querySelectorAll('.myButton');
console.log(buttons);

buttons.forEach(button =>{
    button.style.backgroundColor = "green";
    button.textContent += ":D";
});

buttons.forEach(button =>{
    button.addEventListener("click", event=>{
        event.target.style.backgroundColor = "red";
    });
});

buttons.forEach(button =>{
    button.addEventListener("mouseover", event=>{
        event.target.style.backgroundColor = "blue";
    });
});

buttons.forEach(button =>{
    button.addEventListener("mouseout", event=>{
        event.target.style.backgroundColor = "black";
    });
});

