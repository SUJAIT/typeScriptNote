{
////////////////////////////////////////

//Create a typeScript class Car with properties make,model, and year. Include a method getCaraAge that return the car's age based on the current year.

class Car {
    year:number;
    make:string;
    model:string;

    constructor(model:string,make:string,year:number){
        this.year = year;
        this.model = model;
        this.make = make;
    }

    getCaraAge(): number{
        const runningYear = new Date().getFullYear();
        return runningYear - this.year;
    }
}

const CalCulateCarYear = new Car("Honda", "Civic", 2018);

console.log(`assuming current year is ${CalCulateCarYear.getCaraAge()}`)









    ///////////////////////////////////
}