 
// // myButton.classList.add("enabled");
// // myButton.classList.remove("enabled");

// // myButton.addEventListener("mouseover", event=>{
// //     event.target.classList.add('hover');
// // })

// // myButton.addEventListener("mouseout", event=>{
// //     event.target.classList.remove('hover');
// // })
// myH1.classList.add('enabled');
// myButton.classList.add('enabled');

// myButton.addEventListener("click", event=>{


//     if(event.target.classList.contains('disabled')){
//         event.target.textContent += "mema";
//     }
//     else{
//         event.target.classList.replace('enabled','disabled');
//     } 
// });

// myH1.addEventListener("click", event=>{


//     if(event.target.classList.contains('disabled')){
//         event.target.textContent += "mema";
//     }
//     else{
//         event.target.classList.replace('enabled','disabled');
//     } 
// });

let buttons = document.querySelectorAll('.myButtons');

buttons.forEach(button => {
    button.classList.add("hover");
});

buttons.forEach(button =>{
    button.addEventListener("mouseover", event=>{
        event.target.classList.toggle("hover");
    })
})