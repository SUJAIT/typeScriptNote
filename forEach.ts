{
    //Basic forEach with an Array of Numbers
    const numbers: number[] = [1, 2, 3, 4, 5];

    numbers.forEach((num) => {
      console.log(num); 
    });
    
    //
    //forEach with an Array of Objects
    interface types {
    id: number;
    name:string;
}

const user : types[] = [
    {id:1, name:'suju'},
    {id:2, name:'Rony'},
    {id:3, name:'Sujait'},
];

user.forEach((us) =>{
    console.log(`Id: ${us.id}, Name: ${us.name}`)
});
//







}