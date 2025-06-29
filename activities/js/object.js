const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayBye: function(){ return "Bye"},
}


console.log(person.firstName);
console.log(person.lastName);
person.sayBye();
console.log(`${person.firstName} says ${person.sayBye()}`);
