/**
 * ! Question-1

console.log("start");
let a = 10;
var b = 20;
const c = 30;
{
  let a = 10;
  console.log(a);
  const c = 300;
  console.log(b);
  b = 200;
  c = 30;
  console.log(b);
}
console.log(a);
console.log(b);
console.log("end");
 */


/**
 * ! Question 2

console.log("start");
let a = 10;
console.log(b);
{
  var b = 200;
}
console.log(a);
console.log(b);
console.log("end"); */



// const m=100;
let n=+"abc";  //Nan

const str=Boolean(n)
console.log(str,typeof(str))


const p=1;

const bigNum=BigInt(p)
console.log(bigNum,typeof(bigNum))



const str1="(a,b)=>a-b"
const sub=Function(str1)
console.log(sub)
console.log()

const arr=Array(1,2,3)
console.log(arr)