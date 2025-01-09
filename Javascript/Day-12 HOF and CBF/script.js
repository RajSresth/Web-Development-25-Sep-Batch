// Functional Programming

// import React from 'react'

// const script = () => {
//   return (
//     <div>script</div>
//   )
// }

// export default script

/*
! HOF case-1*/
function generic(fn) // ----> HOF
{
   fn()
}


generic(function() {console.log("Hii")})


/**
 * ! HOF Case-2
 * 
 */

function generateCode()  //-----> HOF
{
    console.log("Code is Generating")
    return (
            function()
            {
                    console.log("Code is generate")
            })    
}

const x=generateCode()
console.log(x)