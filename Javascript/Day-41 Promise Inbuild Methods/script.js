/**
 * 
const p1= new Promise(function (resolve,reject){
    setTimeout(() => {
        resolve("Success")
    }, 5000);
})

const p2=Promise.resolve("Success")
const p3= Promise.reject("Man nhi hai padhne ka")

console.log(p1)
console.log(p2)
console.log(p3)
*/

/**
 * ! Question-1
 */
 
function fun()
{
    return new Promise(function(resolve,reject){
        setTimeout(function A(){
            resolve("Chombi's Promise");
        },0)
    })
}

console.log("Start of the  file..");

setTimeout(function timer1(){
    console.log("Timer 1 Done..");
    let y= fun();
    y.then(function promiseY(value){
        console.log("Whose Promise ? ",value);
    })
},0);

let x= Promise.resolve("Chombu's Promise")
x.then(function process(value){
    console.log("Whose Promise",value)
})

setTimeout(function timer2(){
    console.log("Timer 2 Done..")
}, 0);

console.log("End of the file..")