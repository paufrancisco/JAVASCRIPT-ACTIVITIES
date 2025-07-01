// STEP 1 CREATE AN ELEMENT

const newH1 = document.createElement("h1");



// STEP 2 ADD ATTRIBUTES / PROPERTIES

newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById("box2").append(newH1);

// const box2 = document.getElementById('box2');
// document.body.insertBefore(newH1, box3);

// STEP 4 REMOVE HTML ELEMENT

document.getElementById('box2').removeChild(newH1);