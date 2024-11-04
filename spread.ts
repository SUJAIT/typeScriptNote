{
    // Array Spread Example

    const number: number [] = [1,2,3,4]
    const number2: number[] = [5,6,7,8,9]

    const add : number[] = [...number,...number2]
console.log(add)

//

//Object Spread Example 
interface types {
    name: string;
    age : number;
    country? : string;
}
const user : types = { name:"Sujait" , age:23};
const allDoc : types = {...user,country:"Bangladesh"}
console.log(user)
console.log(allDoc)

//

// Function Arguments Spread Example
function sum(...num:number[]):number{
    return num.reduce((value,value2)=> value+value2,0);
}

const result : number[] = [10,20,60,6]
console.log(sum(...result))
//


























}