{
//
//basic Example of Intersection Type 
type personTy = {
    name: string;
    age:number;
}
type employeTy ={
    employId: number;
    deprtment : string;
}

type EmPer = personTy & employeTy;

const employeDetails : EmPer ={
    name:"Sujait",
    age:23,
    employId:48,
    deprtment:"CSE"
}
console.log(employeDetails)
//
//Use Case For Intersection Types
type admin = {
    priVillages : string[]
};
type User = {
    username:string;
};
type AdminUser = admin & User;

const superAdmin: AdminUser={

    priVillages:["delete","create"],
    username:"sujait321"
}
console.log(superAdmin)
//





//
}