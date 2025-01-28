/**
 * ! use case of for-of loop
 * for(element of Object.values(user))
        {
            console.log(element)
        }
 */



/**
 * ! Object.keys(____) and Object.values(______) method

const obj={
    name:"Tinku",
    age:24,
    city:"Noida"
}

const x=Object.keys(obj)
console.log(x)

const y=Object.values(obj)
console.log(y)

*/

/**
 * ! Object.entries(______)

const user={
    userName:"Chombu",
    isWorking:false
}

let task=Object.entries(user);
console.log(task)    
 */

/**
 * ! Object.fromEntries(______)
    let z=Object.fromEntries(task)
    console.log(z)
 */


/**
 * ! Object.assign(target,src1, src2.....src-n)


const a={ userName:"Tinku"}

const b={ age:21 }

const c={ isWorking:false, age:27}


let response=Object.assign({},a,c,b)
console.log(response)
 */

/**
 * ! Object.freeze(___)  
 * ! Object.isFrozen(______)  -------> true, false
 * No insertion, No updation, No deletion

const obj={
    name:"Chombu",
    age:21
}

Object.freeze(obj) 

let z=Object.isFrozen(obj)

obj["age"]=25;

console.log(obj)
 console.log(z)

 */

 /**
  * ! Object.seal(_____)
  * ! Object.isSealed(____)  -----> true, false
  * No insertion,No deletion
  * Only Updation Possible 

 const obj={
    name:"Tinku",
    age:21,
    city:"Noida"
 }

 Object.seal(obj)
 let z=Object.isSealed(obj)

 obj.age=27
 delete obj.city

 console.log(obj)
 console.log(z)
 */

 /**
  * ! Destructuring in Object
*/

 const obj={
    name:"Chombu",
    age:21,
    city:"Noida",
    state:"UP",
    isWorking:false
 }

 const {name,age,isWorking,city,state}=obj
 console.log(name)
 console.log(age)
 console.log(city)
 console.log(state)
 console.log(isWorking)
   

 /**
  * ! Destructuring in array[]
  */

 const movies=["PHP","Bodyguard","Ghajini","PK","Dhammal"]

 const [,b,,d,]=movies

 console.log(b)
 console.log(d)
