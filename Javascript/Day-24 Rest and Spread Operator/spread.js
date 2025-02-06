/**
 * ! spread operator inside a function
 

const cart=["Maggie","coke","perfume","shoe"];


function findItems(...args)
{
   const [a,,,d]= args;

   console.log(a)
   console.log(d)
}

findItems(...cart)
*/

/**
 * ! spread operator inside an array  (RHS)


const store=["Lays","Kitkat","Cocacola","Shoe","Kurkure","Perfume"];


//Rest operator
const [...cart]=store;


//Store inside a new varibale spread
const carryBag=[...cart];
console.log(carryBag)
 */

/**
 * ! spread operator inside an object
 */

const store={
    item1:"Maggie",
    item2:"Coke",
    item3:"Shoe",
    item4:"Perfume",
    item5:"Kurkure"
}



const carryBag={ 
    name:"Shivam",
    bill:10500,
    purcaseItems:{
        ...store
    }
}
console.log(carryBag);