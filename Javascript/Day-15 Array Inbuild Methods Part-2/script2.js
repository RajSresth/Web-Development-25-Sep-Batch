/**
* ! flat() Method 


let arr=[
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ]


let array1D = arr.map(row => {
     
//     let x=row.map(element=> element * 2);

//     return x;
}).flat(1)

let array1D = arr.map(row => {
     
    let x=row.filter(element=> element % 2 === 0);

    return x;
}).flat(1);


console.log(array1D)
*/

/**
 * ! flatMap()
 
let arr=[1,2,3,4,5];
let x=arr.flatMap(element=>
                {

                    return [element,element **2]
                })

console.log(x)
*/

/**
 * ! every()
 
const arr1=[10,20,30,40,50]
let res=arr1.every( element => element < 4000)
console.log(res)
*/

/**
* ! some() method


const arr1=[10,20,30,40,5];
let x= arr1.some(element=> element > 30 )
*/

/**
 * ! find(callback)
 */

let users=[
    {name:"Harsh",age:21},
    {name:"Aman", age:24},
    {name:"Saurabh", age:23},
    { name:"Aman",age:21}
]

  let x=users.find(element => element.name === "Aman");
  let a=users.findLast(element => element.name === "Aman");

  let y=users.findIndex(element => element.name === "Aman");
  let b=users.findLastIndex(element => element.name === "Aman");

console.log(x,y)
console.log(a,b)


/**
 * ! Methods to read
            with(start,value)
            of()
            join()
            concat()
 */


let arr=[1,2,3,4,5,6];

let newArray= arr.with(2,300);

console.log("New Array",newArray)
console.log("Older Array",arr)




