/**
 * ! Nested Object Destructuring
 * 

const user={
    name:"Chombu",
    age:24,
    address:{
        city:"Noida",
        state:"UP",
        pincode:201301
    }
}

const {name,age,address:{city,state,pincode}}=user
console.log(user)
 */


/**
 * ! Nested Array Destructuring

const arr=[
            "html",
            ["bootstrap","tailwind"],
            "css",
            ["JS","TS"]
        ]


const [a,[b1,b2]=b,c,[d1,d2]=d]=arr;

console.log(b1)
console.log(b2)
console.log(d1)
console.log(d2)
// console.log(b)
// console.log(d)
 */

const app=([f1,f2,f3,f4])=>{

    // Array destructuring
    // const [f1,f2,f3,f4]=task   

   console.log(f1)
   console.log(f2)
   console.log(f3)
   console.log(f4)
    console.log("Implement App feature")
}

app(["login","signup","admin","dashboard"])
