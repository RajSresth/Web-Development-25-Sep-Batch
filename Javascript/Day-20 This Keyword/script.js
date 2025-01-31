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

/**
 * ! This keyword inside regular function which is inside a method

const obj={
    name:"SRK",

    greet:function(){
        console.log(this)  // obj

        function inner1(){
                console.log("named function",this)
        }   
        
        const inner2=()=>{
            console.log("Arrow function",this)
        }
        inner2()      
    }
}

obj.greet()

 */


/**
 * ! if a method is assigned to a outer variable


const obj={
    name:"Amir Khan",

    details:function(){
        console.log(this)
    }
}

let outer=obj.details

outer()
 */

/**
 * !


const obj={
    name:"Sid",
    skills:["html","css","js"],

    greet:function(){

        this.skills.forEach((element,index,array)=>
                                {
                                    console.log(this.skills[index])
                                })
    }
}


obj.greet()

 */

/**
const obj={
    name:"Sid",
    skills:["html","css","js"],

    greet:function(){
        const temp=this;

        function inner() {
            console.log(temp);
        }
        inner()
    }
}
obj.greet()

 */

/**
 * ! this keyword inside nested object


const obj={
    name:"SRK",

    address:{
        state:"Maharashtra",
        pin:201102,

        greet:function(){
            console.log(this);
        }
    }
}

obj.address.greet()
 */

/**
 * !
 */

const obj={
    name:"SRK",
    greet:function(){
            console.log(this);
        }
}

obj.greet.api="abcd123";
obj.greet.fun=function()
                {
                    console.log(this)
                }
obj.greet()
obj.greet.fun()






