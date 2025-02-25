const grandparent= document.getElementById("grandparent")
const parent= document.getElementById("parent")
const child= document.getElementById("child")


grandparent.addEventListener("click",function(){
    console.log("Grand parent executed..")
},false)

parent.addEventListener("click",function(){
    console.log("Parent executed..")
},false)

child.addEventListener("click",function(){
    console.log("Child executed..")
},false)