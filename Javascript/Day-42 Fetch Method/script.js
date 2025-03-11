const Github_URL="https://api.github.com/users/Amarverma9627";

fetch(Github_URL)
.then(function(val){  
    return val.json()
}) 
.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err.name)
    console.log(err.message)
})

