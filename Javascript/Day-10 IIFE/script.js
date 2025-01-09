// (function greet(fname)
// {
//    alert(`Namaste ${fname}..!!`)

// })("Chombu")



// debugger

/*
var output=(function getLocation(fname)
            {
                const res=confirm("Do you want to share your location")
                return res;
            })()

console.log(output)  */


// const add=(function(){
//                 let count=0;
//                 return (function(){
//                             return count+1;
//                         })
//             })() 

// console.log(add())
// console.log(add())
// console.log(add())






function classroom()
{
    let bag="10cr";
    let task=function(){
        console.log("Hello Developers..")
    }

    function tushar()
    {
        console.log("Inside Tushar Function")
        console.log(bag)
        console.log(task)
        task()
        return "All task done"
    }
   
    return tushar;
}

let x=classroom()
let y=classroom()
console.log(x)
console.log(y)
console.log(x())
console.log(y())
