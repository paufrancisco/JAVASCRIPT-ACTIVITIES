class MathUtil{
    static PI = 3.1416

    static getDiameter(radius){
        return radius*2;
    }
    static getCircumference(radius){
        return this.getDiameter(radius)*this.PI;
    }
    static getArea(radius){
        return this.PI*radius**2;
    }

}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(4));
console.log(MathUtil.getCircumference(10).toFixed(2));
console.log(MathUtil.getArea(10).toFixed(2));




class User {
    static userCount = 0;

    constructor(username){
        this.username = username; 
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${this.userCount} user count`);
    }
    sayHello(){
        console.log("Hellow");
    }
}

const user1 = new User("Spongebob1");
const user2 = new User("Spongebob2"); 
const user3 = new User("Spongebob3"); 

console.log(user1.username);
console.log(User.userCount);
user1.sayHello();
User.getUserCount();