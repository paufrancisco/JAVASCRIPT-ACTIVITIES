const person1 = {
    name:"Spongebob",
    favFood: "Hamburgers",
    sayHello: function(){console.log(`Hi  I am ${this.name}`)}
}
person1.sayHello();

console.log(this);