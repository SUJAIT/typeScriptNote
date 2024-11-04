type genericArray = Array<string>
type genericNumber = Array<number>
type genericBoolean = Array<boolean>

const names : genericArray = ["Allah" ,"Mohammod Rusul"]
const number : genericNumber = [1,1]
const boolean : genericBoolean = [true]

console.log(names)
console.log(number)
console.log(boolean)


type genericArrays<Params> = Array<Params>

const user: genericArrays<{name:string; age:number}> = [
    {
        name:"Sujait Ullah",
        age: 23
    },
    {
        name:"Rony",
        age:23
    }

]
console.log (user)


// generic tuple 
type GenericTuple <X,Y> = [X,Y]

const life : GenericTuple<string,string> = ['Islam','All-Halal']
console.log(life)

const userWithData : GenericTuple<number,{name:string,email:string}>=[123,{name:'sujait',email:'sujait@gmail.com'}]
console.log(userWithData)


// arrayWithGeneric 

const arrayWithGeneric = <T>(param: T): T[] => {
    return[param];
};

const res1 = arrayWithGeneric<string>('Bangladesh')

const resGenericObj = arrayWithGeneric<{id:number;name:string}>({id:48,name:'Sujait'})

type t ={id:number;name:string}

const resGenericObj2 = arrayWithGeneric<t>({id:48,name:'Rony'})

console.log(res1)
console.log(resGenericObj)
console.log(resGenericObj2)

//arrayWithTuple 
const ArrayWithTuple = <t,Q> (param1: t,param2:Q): [t,Q] =>{
    return[param1,param2];
};


const res20 = ArrayWithTuple<string,number>("Bangladesh" ,4455)

console.log(res20)

const res22 = ArrayWithTuple <string,{D1:string,D2:string,D3:string}>("Bangladesh",{D1:"Dhaka",D2:"Chittagong",D3:"Mymanshing"})

console.log(res22)