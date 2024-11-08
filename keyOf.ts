{
    ////////////////////////////////////////////////

// normal key of 
type parsonty = {
    name : string;
    age: number;
}
type PersonKeys = keyof parsonty;

const PersonKeys = {
name:"Sujait",
age:23,
}
console.log(PersonKeys)
//

//Constraint Using Key Of 
function getProperty<T, K extends keyof T> (obj: T,key:K): T[K]{
    return obj[key];
}
const person: parsonty = {name:"Rony",age:25};

const name = getProperty(person, 'name')
console.log(name)
//


























    /////////////////////////////////////////////
}