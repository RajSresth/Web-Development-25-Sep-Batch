/**
 * ! Rest parameter inside a function
 */

const a="Lays";
const b="Cocacola";
const c="Perfume";
const d="Kitkat";
const e="Shoe";

function cart(item1,item2,...args)
{
    console.log(item1)
    console.log(item2)
    console.log(args)
    console.log(itemLast)
}
cart(a,b,c,d,e)



/**
 * ! Rest Parameter inside an Array (destructuring)
 */

const store=["Lays","Kitkat","Cocacola","Shoe","Kurkure"]


// Destructuring
const [x,y,...cart] = store;
console.log(cart)


/**
 * ! Rest parameter inside an object
 */

const obj={
    item1:"Maggie",
    item2:"Coke",
    item3:"Shoe",
    item4:"Perfume",
    item5:"Kurkure"
}

//Destrucuring
const {...items} = obj;
console.log(items)
