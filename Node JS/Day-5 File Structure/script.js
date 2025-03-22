// create file, readfile, writefile,delete, rename
const fs=require("fs");
console.log("start")

setImmediate(function A(){
    console.log("Set Immediate Task-1")

    setImmediate(function G(){
        console.log("Set Immediate Task-1")
    })

    process.nextTick(function E(){
        console.log("Second Next Tick Task")
    })

    setTimeout(function F(){
        console.log("Timer Task-2")
    },5000)
})

Promise.resolve("Promise").then(val=>console.log(val))

fs.writeFileSync("index.html","New HTML File")
console.log("File Created Successfully")

setTimeout(function B(){console.log("Timer Task")}, 0);

process.nextTick(function D(){console.log("Next Tick Task")})

console.log("end")
