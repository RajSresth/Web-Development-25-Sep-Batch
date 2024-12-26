/**
 * ! Case1: Function is declared inside a block
 

var user="Tinku";

    {
        console.log("Inside a Local Scope");

        function details(age,city)
        {
            var pin=110006;
            console.log(age)
            console.log(city)
            return `GM ${user}`;
        }
    }

let x=details(21,"Noida")
console.log(x)
*/

/* 
 !Function is Declared inside another function


var user="Tinku";

    function outer(age,city)
    {
        console.log("Inside outer Function");
        var pin=110006;
        console.log(`Username: ${user}`)

        function inner(m,n)
        {
                console.log("Inside inner Function")
                console.log(m)
                console.log(n)
        }

        inner()
    }

outer()
*/


/* 
! Variable shadowning 
var fname="Chombu";
function fun1()
{
    var fname="Dinga";
  console.log(`Username: ${fname}`)
  console.log(`Username: ${window.fname}`)
}
fun1()
*/

/* 
!  Default Parameters

function details(user)
{
    if(user.trim() !=="" && user.length!==0)
    {

        console.log(`Username: ${user.trim()}`)
    }
    else{
        console.error("Invalid username")
    }
}

let username=prompt("Enter fullname");
details(username)

*/

/*
 ! Arguments
*/
function memes()
{
    
    console.log(`${arguments[0]+" or "+arguments[1]} Bulati h magar jane ka nahi..!`)
}

memes("Paras","Abhishek")