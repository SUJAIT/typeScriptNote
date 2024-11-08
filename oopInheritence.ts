{
    //////////////////////////////////////

class animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Some Generic animal sound");
    }

}

class Dog extends animal { 

    breed: string;

    constructor (name: string, breed: string){
super(name);
this.breed = breed;
    }

    makesSound(): void {
        console.log("Woof")
    }

    fetch() : void {
        console.log(`${this.name} is fetching`)
    }

}

const myDog = new Dog ("Buddy","sfr")
console.log(myDog)











    //////////////////////////////////////
}