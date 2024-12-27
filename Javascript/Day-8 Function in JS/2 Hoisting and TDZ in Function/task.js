console.log("Start")
var a=10;
task()

let b=20;
function task()
    {
        console.log("Inside Task Function")
        b=2;
        console.log(a)
        console.log(b)
    }
console.log("Outside a Function");
console.log(a)
console.log(b)

//start
//Inside task function
//10
//2
//Outside a function
//10
//2