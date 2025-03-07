/**
 * ! Promise Object Creation 
 
console.log("Start");
const p1= new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve("Success")
        }, 5000);
})

console.log(p1)
console.log("End")

*/

/**
 * ! Promise Object Cases and use of .then() and .catch() method
 */

const pr= new Promise(function(resolve,reject){
    setTimeout(() => {
            resolve("Success")
    }, 5000);  
})

pr.then((data) =>{
    return data;
} )
.then(val=>{
    console.log(val)
})