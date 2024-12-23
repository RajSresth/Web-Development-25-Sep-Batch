// "use strict"

/**
 * ! Autoglobal Case-1 
var a=1;
console.log(a)

{
    b=20;
    console.log("Inside a Local Scope")
    console.log(a)
    console.log(b)
}
console.log("Outside a Local Scope")
console.log(a)
console.log(b)

*/




// for(let i=0;i<3;i++)
// {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000);
// }


var a=1;
console.log(a)
{
    b=20;
    console.log("Inside a Local Scope")
    console.log(a)
    console.log(b)
}
let b;
console.log("Outside a Local Scope")
console.log(a)
console.log(b)