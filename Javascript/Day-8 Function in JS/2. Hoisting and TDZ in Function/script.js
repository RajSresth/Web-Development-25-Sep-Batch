/*
! Case-1 when function is decraled inside a block


console.log("Start");
greet();
    {
        function greet()
        {
            console.log("Namaste Developers..!")       
        }
    }
*/

/*
    ! Autoglobals inside a function


console.log("start")
var a=10;

fun()
function fun()
{
    b=2;
    console.log("Inside a Function")
    console.log(a)
    console.log(b)
}

console.log("Outside a Function")
console.log(a)
console.log(b)
console.log("end")

*/

console.log("Start")
var a=10;
task()
    function task()
    {
        console.log("Inside Task Function")
        b=2;
        console.log(a)
        console.log(b)
    }
let b=20;
console.log("Outside a Function");
console.log(a)
console.log(b)

//start
// inside a function
//10
//2
// outside a function
//10
//20