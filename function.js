const display = document.getElementById("displayresult");
const buttons = document.querySelectorAll("button[data-value]");
const enter = document.getElementById("enter");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    expression += button.getAttribute("data-value");
    display.innerText = expression;
  });
});

enter.addEventListener("click", () => {
  try {
    const result = eval(expression);
    display.innerText = result;
    expression = result.toString(); 
  } catch (err) {
    display.innerText = "Error";
    expression = "";
  }
});
