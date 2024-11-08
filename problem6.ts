{
    ////////////////////////////////////
interface profileKeyTy {
    name: string;
    age:number;
    email:string
}

const myProfile : profileKeyTy ={
    name:"Sujait Ullah",
    age: 23,
    email: "sujait@gmail.com"
}

function updateObject<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
    return { ...obj, [key]: value };
  }

  const updateObj = updateObject(myProfile,"email","sujait2000@GamepadHapticActuator.com")

  console.log(updateObj);








    ////////////////////////////////////
}