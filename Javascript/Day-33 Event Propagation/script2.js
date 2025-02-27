const grandparent= document.getElementById("grandparent")
const parent= document.getElementById("parent")
const child= document.getElementById("child")


grandparent.addEventListener("click",function(event){
    console.log("Grand parent executed..")
},true)

parent.addEventListener("click",function(e){
    console.log("Parent executed..")
},true)

child.addEventListener("click",function(event){
    console.log("Child executed..")
},true)

child.addEventListener("click",function(event){
    event.stopImmediatePropagation()
    console.log("Second time Child executed..")
},true)

child.addEventListener("click",function(event){
    console.log("Third time Child executed..")
},true)