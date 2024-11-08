{
//////////////////
//class function uses
class person {
    name : string;
    age : number;

    constructor(name : string, age: number){
        this.name = name;
        this.age = age;
    }

    great(){
        console.log(`The Person name is ${this.name} and the Person age is ${this.age}`)
    }

}
// & Object uses
const parsonNameAge = new person("Sujait",23)
parsonNameAge.great()
//

//Encapsulation
class BankAccount {
    private balance : number = 0;

    deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}.New Balance`)
        }
    }

    getBalance() : number {
        return this.balance;
    }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance())

//

// Inheritance 
class Animal {
    name : string;

    constructor(name: string){
        this.name = name
    }

    move(){
        console.log(`${this.name}`)
    }

}

class Dog extends Animal {
    bark() {
        console.log(`${this.name}`)
    }
}

const myDog = new Dog("Buddy");
console.log(myDog)
myDog.move()
myDog.bark()
//

//Polymorphism 
class Bird extends Animal {
    move() {
        console.log(`${this.name} is flying`);
    }
}

const newAnimal : Animal[] = [new Bird("Rani")]
newAnimal.forEach((animal) => animal.move());
//

//Abstraction 
abstract class Shape {
    abstract area() : number;
}

class Circle extends Shape {
    radius : number;

    constructor(radius : number){
        super();
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius ** 2
    }
}

const circle = new Circle(5);
console.log(circle.area())

//















///////////////////////
}