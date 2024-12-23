/**

var a=1;
let b=2;
const c=3;
    {
        var a=10;
        let b=20;
        const c=30;
        var d=40;
        console.log("Inside a Local Scope")
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(d)
    }

console.log("Outside a Local Scope")
console.log(a)
console.log(b)
console.log(c)
console.log(d)
 */

const b=2;
console.log(b)
    {
        b=20;
        console.log(b)
    }
console.log("Outside a Scope")
console.log(b)
    