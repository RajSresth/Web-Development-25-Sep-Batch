// "use strict";


// global without strict mode

// console.log(this)


/* 
! this keyword inside a named function

function greet()
{
    console.log(this)
}
greet()
*/

// this keyword inside an arrow function
const fun=()=>{
    console.log(this)
}



const obj={
    name:"Salman Khan",

    greet:function(){
        // console.log(this)  ------> obj

        function inner1(){
                console.log("named function",this)
        }
        const inner2=()=>{
            console.log("arrow function",this)
        }
        inner1()
        inner2()
    }
}

obj.greet()