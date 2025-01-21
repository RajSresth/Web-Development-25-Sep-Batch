// ! sort(callback)


// let arr=[4,2,5,1,3]


// arr.sort((a,b)=>b-a)

// +ve swap
// -ve no swap
// 0 no swap

// console.log(arr)


// const skills=["html","css","js"];
// skills.sort()
// console.log(skills)


/**
let arr=[1,2,3,4,5];

let mid=Math.floor(arr.length/2)

const newArr=arr.map((element,index)=> {

    if(index < mid)
    {
        return element**2;
    }
    
})

console.log(newArr)

 */


/**
let arr=[1,2,3,4,5]
let mid=Math.floor(arr.length/2)

let x=  arr.filter((element,index,array)=>index < mid)

let y=  arr.filter((element,index,array)=> element !== 3)

console.log(x)
console.log(y)
 */


/**
 * ! Reduce Method
let arr=[10,20,30,40,50];
let x=arr.reduceRight((acc,element,index,array)=>{

    acc=acc+element;

    return acc;
},10)

console.log(x)

 */

/**
 * ! Reduce right method
 

let arr=[10,20,30,40,50];

let x=arr.reduceRight((acc,element)=>{
            if(element >= 40)
            {
                acc.push(element);
            }

            return acc;
},[]).sort((a,b)=>a-b);

console.log(x)
*/

/**
 * ! 2d Array reduce method
let arr=[
          [1,2,3],
          [4,5,6],
          [7,8,9]
        ]

let total=arr.reduce((acc1,row)=>{

    acc1= acc1 + row.reduce((acc2,element)=>acc2+element,0)
                                   
    return acc1;
},0)

console.log(total);
 */


/**
 * ! filter Object inside array
 

let users=[
    { name:"Tinku", age:24},
    { name:"Dinga", age:17},
    { name:"Simba", age:16},
    { name:"Chombi", age:19}
]

  let eligibleUsers=users.filter(element=>{

    if(element.age>=18)
    {
            return true;
    }
  })



  let y=users.reduce((acc,element)=>{

    if(element.age>=18)
    {
        acc.push(element.name);
    }

    return acc;
  },[])

  console.log(eligibleUsers)
  console.log(y)
*/

/**
 * ! Assignment Question

  let products=[
    { itemName:"Shirt", price:2400},
    { itemName:"Shoes", price:1800},
    { itemName:"Lipstick", price:3600},
    { itemName:"Bag", price:1500},
    { itemName:"watch", price:3000}
]

1. totalPrice:-12300;
2. create one array of product having price less than 3000?
 */


