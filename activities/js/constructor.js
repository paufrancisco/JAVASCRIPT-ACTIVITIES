function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

const car1 = new Car("Ford",
                     "Mustang",
                     "2024",
                     "Black"  
)

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

