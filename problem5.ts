{
////////////////////////////

function getProperty<T,K extends keyof T>(obj:T,key:K):T[K]{
    return obj[key];
}

const person = {name:"Sujait",age:23};

const name = getProperty(person,"name")
const age = getProperty(person,'age')

console.log(age)
console.log(name)


////////////////////////////
}