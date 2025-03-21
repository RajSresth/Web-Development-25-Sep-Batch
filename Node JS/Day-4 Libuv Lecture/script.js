console.log("Start");  // synchronous
const fs=require("fs");  // synchronous

setImmediate(function A(){console.log("Set Immediate")});

setTimeout(function B(){console.log("Timer Done")}, 10000);

fs.readFile("./memes.txt","utf-8",function C(err,data){
    if(err) {
        console.log(err)
    }
    console.log(data);
})

function task(a,b){
     console.log("Sum is: ",a+b);
}
task(2,3) 
console.log("end")  // synchronous