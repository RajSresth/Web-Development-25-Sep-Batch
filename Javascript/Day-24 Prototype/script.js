
/**
const arr=[10,20,30,40,50];
console.log(arr.__proto__)
console.log(arr.__proto__.__proto__)
console.log(arr.__proto__.__proto__.__proto__)





const emp= {
    name:"Tinku",

    work:function(){
        console.log("Emp can code..");
    },
    // __proto__:human
}



// Object.setPrototypeOf(emp,human);

console.log(emp)
 */

//! Parent object
const animal={
    eat:function (){
        console.log(`${this.name} can eat`);
    },
    sound:function()
    {
        console.log(`Sound is: ${this.spell}`);
    }
}

const human={
    eat:function (){
     console.log("Human can eat");
    },
 
    sleep:function(){
     console.log("Human can sleep")
    }
 
 }


// ! child object
const dog={
    name:"Sheero",
    spell:"Bark",
    
}

Object.setPrototypeOf(dog,animal)
const x=Object.getPrototypeOf(dog)
console.log(x === animal);

