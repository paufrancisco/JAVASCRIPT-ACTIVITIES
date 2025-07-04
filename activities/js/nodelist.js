// let buttons = document.querySelectorAll('.myButton');
// console.log(buttons);

// buttons.forEach(button =>{
//     button.style.backgroundColor = "green";
//     button.textContent += ":D";
// });

// buttons.forEach(button =>{
//     button.addEventListener("click", event=>{
//         event.target.style.backgroundColor = "red";
//     });
// });

// buttons.forEach(button =>{
//     button.addEventListener("mouseover", event=>{
//         event.target.style.backgroundColor = "blue";
//     });
// });

// buttons.forEach(button =>{
//     button.addEventListener("mouseout", event=>{
//         event.target.style.backgroundColor = "black";
//     });
// });

// const newButton = document.createElement("button");
// newButton.textContent = "Button 1";
// newButton.classList = "myButton";

// document.body.appendChild(newButton);
// buttons = document.querySelectorAll('.myButton'); 
// console.log(buttons);

let buttons = document.querySelectorAll('.myButton');

buttons.forEach(button =>{
    button.addEventListener("click", event=>{
        event.target.remove(); 
        buttons = document.querySelectorAll('.myButtons');
        console.log(buttons);
    })
})