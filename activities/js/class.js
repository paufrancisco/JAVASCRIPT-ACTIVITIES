// function Product(name, price){

//     this.name = name;
//     this.price = price;

//     this.displayProduct = function(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price.toFixed(2)}`);
//     }

//     this.calculateTotal = function(){
//         return this.price + (this.price * salesTax);
//     } 
// }

// const salesTax = 0.05; 
// const product1 = new Product("Shirt", 19.99);

// product1.displayProduct();
// console.log(`Total with tax: ${product1.calculateTotal().toFixed(2)}`);

function Product(name, price){
    this.name = name;
    this.price = price;

    this.CalculateTotal = function(){ 
        return (this.price - this.price*salesTax).toFixed(2);
    };
}

const salesTax = 0.05;
const product = new Product("mema",12);

let total = product.CalculateTotal();
console.log(total);