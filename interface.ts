{
//normal interface 

interface StudentInfo {
  name:string;
}

interface Id extends StudentInfo{
  StudentId : number;
}

const stuId :Id = {
  name:"sujait",
  StudentId :212521
}
console.log(stuId)

//

//interface with method
interface fds {
  name: string;
  fdWife():string;
}

const ovi:fds ={
  name:"Saimon Nur Ovi",
fdWife(){
  return "ms nur ovi"
}
};
console.log(ovi)
console.log(ovi.fdWife())

//

//Optional and Read-Only Properties
interface Bike {
 readonly model: string;
 brand : string;
 year? : number;
}

const myBike : Bike = {
  model:"R15",
  brand:"Yeamaha"
}
console.log(myBike)
//

//Interface for function 
interface AmiTy {
 (name:string) : string
}

const Ami : AmiTy = (name) =>{
  return `I am ${name}`
}

console.log(Ami("Sujait"))

//

// Using Interface With Classes
interface Shape {
  getArea(): number ;
}
class Circle implements Shape {
  constructor (public radius:number){}
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.getArea())
//



interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    lastLogin?: Date;  // Optional property
  }
  
  const exampleUser: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    isActive: true,
    lastLogin: new Date(),
  };
  console.log(exampleUser)








}