// let a=10;

// function outer()
// {
//     console.log("Inside outer function")

//     function inner()
//     {
//         console.log("Inside inner function")

//         return "Tu samjha..!"
//     }

//     return inner;
// }

// let x=outer()()
// console.log(x)


function sum()
{
   console.log(arguments)
   console.log(arguments[0])
   console.log(arguments[1])
   console.log(arguments[2])

   console.log(arguments.callee)
}

sum(10,20,30)