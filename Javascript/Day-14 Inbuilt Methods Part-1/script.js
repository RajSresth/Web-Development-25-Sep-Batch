const arr=["a","b","e","f","d"];
let z=arr.splice(2,2,"c")


// console.log(arr)
// console.log("Returned value",z)

// slice(starting index,last index)

// const movies=[
//     "Race-3",
//     "PHP",
//     "Dhamaal",
//     "KGF",
//     "PK",
//     "Welcome",
//     "Bodyguard"
// ]


// const comedyMovies=movies.slice(1,3)
// comedyMovies.push(movies.slice(4,6))
// console.log(comedyMovies.flat())

const movies=[
    "Race-3",
    "PHP",
    "Dhamaal",
    "KGF",
    "PK",
    "Welcome",
    "Bodyguard",
    "Marco"
]


// let indexNumber=movies.indexOf("PHP",2)
// let indNo=movies.lastIndexOf("Welcome",4)

let res=movies.includes("PHP",2)

if(res)
{
    console.log("Movie is available")
}
else{
    console.log("Invalid movie name")
}


let arr1=[1,2,3,4,5]

let x=arr1.reverse()
console.log(x);