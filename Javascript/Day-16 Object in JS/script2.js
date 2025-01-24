
// const obj1 = new Object({name:"Tinku", age: 24})
// console.log(obj1)



// const arr=[
//     function (){ console.log("First Function")},
//     function () { console.log("Second Function")},
//     (a,b)=>a+b   
// ]

// console.log(arr[0]())
// console.log(arr[1]())
// console.log(arr[2](5,10))




// ! Question-1 write a function that takes an array and calcuate factorial of each element?




// output=[1,2,6,24,120]


function findFactorial(n)
{
        let fact=1;
        for(let i=n;i>0;i--)
        {
            fact= fact * i
        }
        return fact;
}




function arrayFactorial(arr)
{   
        let result=arr.map(element=>{
        let x=findFactorial(element);
        return x
    })
    return result;
}


const input=[1,2,3,4,5]
let output=arrayFactorial(input)

console.log(output)