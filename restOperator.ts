

// function rest operator 

function sum(...numbers: number[]): number {
return numbers.reduce((acc,num) => acc + num, 0);
}
console.log(sum(1,2,3,4,52,12,58,65,5))
//

//rest operator array

const [first,second, ...rest] = [10,20,30,6,4]
console.log(first)
console.log(second)
console.log(rest)


      //array destructuring
      const fdNames : string[] = ["Jahad","Ovi","Emu","Eva","Srabon"]

      const [...allFd] = fdNames
      
      console.log(allFd)
      //

      