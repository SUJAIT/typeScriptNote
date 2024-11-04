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



}

