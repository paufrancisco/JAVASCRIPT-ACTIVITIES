class Animal{

    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    } 
}


class Rabbit extends Animal{
    name = 'rabbit';
}
const rabbit = new Rabbit();

rabbit.sleep();
rabbit.eat();
console.log(rabbit.alive);