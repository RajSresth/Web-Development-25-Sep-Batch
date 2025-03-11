// const p1= new Promise(function A(resolve,reject){
//     setTimeout(() => {
//         resolve("Success")
//     }, 30000);
// })
// const p2= new Promise(function A(resolve,reject){
//     setTimeout(() => {
//         resolve("Success")
//     }, 50000);
// })

// const x=getDetails()

// async function getDetails()
// {
//     console.log("Hello Developers..")
//     const resp1 =await p1;   // yha pr 30 second ka time lgega
//     console.log("Response-1 mil gaya")

//     const resp2= await p2;  // yha pr 50 second ka time lgega
//     console.log("Response-2 Mil gaya")
// }



const Github_URL="https://api.github.com/users/Amarverma9627";

async function getDetails(url){
       const resp=await fetch(url)
      const result=await resp.json()

      return result;
}


const x=getDetails(Github_URL)
x.then(val=>{
    console.log(val)

    // Destructuring
    const {id,login,location,avatar_url}= val;
    console.log(id)
    console.log(login)
    console.log(location)
    console.log(avatar_url)
})
.catch(err=>console.log(err))
.finally()



