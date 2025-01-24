const obj={
    name:"Tinku",
    age:24,
    wishBirthday:function()
                    {
                        console.log(` HBD: ${this.name}`)
                    },
    greet:function()
        {
            console.log(`GM ${this.name}`)
        }
}

obj.wishBirthday()
obj.greet()




// Nested Object or array inside object

const obj1={
    name:"Chombu",
    age:21,
    isWorking:false,

    skills:["html","css","js","react"]
}

const obj2={
    name:"Chombu",
    age:21,
    isWorking:false,

    address:{city:"Noida",state:"UP",pincode:201301}
 }


 









