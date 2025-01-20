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


