{
// Destructuring object ts 

    interface User {
        name: string;
        age: number;
        address: {
          city: string;
          country: string;
        };
      }
      
      const user: User = {
        name: "Alice",
        age: 25,
        address: {
          city: "New York",
          country: "USA",
        },
      };
      
      // Destructuring the user object
      const { name, age, address: { city, country } } = user;
      
      console.log(name);
      console.log(age); 
      console.log(city); 
      console.log(country); 
      //

      //array destructuring
const fdNames : string[] = ["Jahad","Ovi","Emu","Eva","Srabon"]

const [...allFd] = fdNames

console.log(allFd)
//

//Function Parameter Destructuring with Type Annotations

function userInfo ({name,age}:{name:string;age:number}){
    console.log(`Name:${name},Age:${age}`);
}
userInfo({name:"Sujait",age:23});
//
//Skipping Elements in Array Destructuring
const number : number [] = [1,2,3,4,5]

const [first, , ,fourth] = number;
console.log(first)
console.log(fourth)
// 

// Destructuring with Default Values
const num: number[] = [1,2];
const [firstNum, second,third=0] = num;
console.log(firstNum)
console.log(second)
console.log(third)
//

// Object Destructuring 
{
interface typeValue {
  name : string;
  age : number;
  isActive?: boolean;
}

const student: typeValue = {name:"Sujait",age:23,isActive:true};

const {name,age,isActive}= student;

console.log(name,age,isActive)

}


//Nested Destructuring 
{

interface typesAdress{
  city:string;
  zipCode:number;
}
interface typesUser{
  name:string;
  age:number;
  address:typesAdress;
}

const user: typesUser = {
  name:"Sujait",
  age:23,
  address:{
    city:"Chittagong",
    zipCode:5413,
  },
};

const {name,age,address:{city,zipCode}} =user;
console.log(name,age,city,zipCode)

}
//

//Fuction Parameter Destructuring
{

interface Config {
  url: string;
  method: string;
  headers?:{[key:string]:string};
}
function request({url,method,headers={}}:Config):void{
  console.log(`Sending a ${method} request to ${url}`);
  console.log("Header:",headers);
}

request({
  url:"https://api.example.com",
  method:"GET"
})
}
//




//



}

