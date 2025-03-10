/**
 * ! Promise.all([p1, p2 ,p3....])
 * 


const p1=new Promise(function(resolve,reject){
                setTimeout(() => {
                    resolve("Promise 1")
                    // reject("Mn nhi tha")
                }, 1000);
})
const p2=new Promise(function(resolve,reject){
                setTimeout(() => {
                    resolve("Promise 2")
                }, 3000);
})
const p3=new Promise(function(resolve,reject){
                setTimeout(() => {
                    // resolve("Promise 3")
                    reject("Mn nahi tha execute hone ka")
                }, 2000);
})


const result= Promise.all([p1,p2,p3])
console.log(result)
*/

/**
 * ! Promise.allSettled([p1,p2,p3])


const p1=new Promise(function(resolve,reject){
    setTimeout(() => {
        // resolve("Promise 1")
        reject("Mn nhi tha")
    }, 1000);
})
const p2=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("Promise 2")
    }, 3000);
})
const p3=new Promise(function(resolve,reject){
    setTimeout(() => {
        // resolve("Promise 3")
        reject("Mn nahi tha execute hone ka")
    }, 2000);
})

const result= Promise.allSettled([p1,p2,p3])
console.log(result)
 */

/**
 * ! Promise.race([p1,p2,p3])


const p1=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("Promise 1")
        // reject("Mn nhi tha")
    }, 1000);
})
const p2=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("Promise 2")
    }, 3000);
})
const p3=new Promise(function(resolve,reject){
    setTimeout(() => {
        // resolve("Promise 3")
        reject("Mn nahi tha execute hone ka")
    }, 2000);
})

const result= Promise.race([p1,p2,p3])
console.log(result)
*/

/**
 * ! Promise.any([p1,p2,p3])
 */

const p1=new Promise(function(resolve,reject){
    setTimeout(() => {
        // resolve("Promise 1")
        reject("Mn nhi tha")
    }, 1000);
})
const p2=new Promise(function(resolve,reject){
    setTimeout(() => {
        // resolve("Promise 2")
        reject("Nahi Chlega")
    }, 3000);
})
const p3=new Promise(function(resolve,reject){
    setTimeout(() => {
        // resolve("Promise 3")
        reject("Mn nahi tha execute hone ka")
    }, 2000);
})

const result= Promise.any([p1,p2,p3])
console.log(result)
result
.then(val=>console.log(val))
.catch(err=>{
    console.log("Error Name:",err.name)
    console.log("Error Message:",err.message)
    console.log("Error Value:",err.errors)
})
