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
    button.addEventListener("click", event=>{
        event.target.style.backgroundColor = "red";
    });
});
