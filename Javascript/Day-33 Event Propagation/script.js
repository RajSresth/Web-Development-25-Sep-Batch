const grandparent= document.getElementById("grandparent")
const parent= document.getElementById("parent")
const child= document.getElementById("child")

// All capturing phase events
grandparent.addEventListener("click",function(event){
    console.log("Grand parent executed..")
},true)

parent.addEventListener("click",function(e){
    e.stopPropagation()
    console.log("Parent executed..")

},false)

child.addEventListener("click",function(event){

    event.stopPropagation()
    console.log("Child executed..")
},true)





/** 
 *  ! All for bubbling phase

grandparent.addEventListener("click",function(){
    console.log("Grand parent executed..")
},false)

parent.addEventListener("click",function(){
    console.log("Parent executed..")
},false)

child.addEventListener("click",function(){
    console.log("Child executed..")
},false)

*/