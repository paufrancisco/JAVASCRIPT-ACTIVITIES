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

function Product(name, price, qty){
    this.name = name;
    this.price = price;
    this.qty = qty;

    this.calculateTotal = function(){ 
        return ((this.price - this.price*salesTax)*this.qty).toFixed(2);
    };

    this.displayProduct = function(){
        console.log(`The product: ${this.name} cost ${this.price}`);
    }; 
      
}

function Student(name,age,section,id){
    this.name = name;
    this.age = age;
    this.section = section;
    this.id = id;

    this.displayStudentInfo = function(){
        console.log(`Student #${this.id}: ${this.name} ${this.age} years old. Section ${this.section}`);
    }


}

const student = new Student(
    "name",
    24,
    "Rizal",
    287724
);


const salesTax = 0.05;

const product = new Product("Mikmik",12,200); 
const total = product.calculateTotal();

student.displayStudentInfo();
product.displayProduct();

console.log(total);