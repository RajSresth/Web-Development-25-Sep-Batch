// var user="Ram";

// console.log(`Good Morning
// ${user}`)      


const a="hii"

const b=Symbol(a)
console.log(b)
console.log(a==b)  //false
console.log(a==b.description) //true

/*
 ! Advanced usecase of Symbol
const sum=(a,b)=>a+b;
const customSum=Symbol(sum)
console.log(customSum)  //symbol
console.log(customSum.description)
const fun=Function(customSum.description)
console.log(fun) */