const checkbox = document.getElementById('myCheckbox');
const visa = document.getElementById('visaBtn');
const mastercard = document.getElementById('masterBtn');
const paypal = document.getElementById('paypalBtn');

const btnSubmit = document.getElementById('mySubmit');

const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');


btnSubmit.onclick = function(){
    if(checkbox.checked){
        subResult.textContent = `You are subscribed!`;
    }else{
        subResult.textContent = `You are not subscribed!`; 
    } 
    
    if (visa.checked) {
        paymentResult.textContent = `You are paying with Visa`;
    } else if (mastercard.checked) {
        paymentResult.textContent = `You are paying with MasterCard`;
    } else if (paypal.checked) {
        paymentResult.textContent = `You are paying with PayPal`;
    } else{
        paymentResult.textContent = `Please select payment type`;
    }
      
}