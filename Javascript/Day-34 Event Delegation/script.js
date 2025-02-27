
/**
 * ! Without Event Delegation
const item1=document.querySelector(".item1")
const item2=document.querySelector(".item2")
const item3=document.querySelector(".item3")
const item4=document.querySelector(".item4")

item1.addEventListener("click",function(e){
    console.log("Item-1 is clicked")
})
item2.addEventListener("click",function(e){
    console.log("Item-2 is clicked")
})
item3.addEventListener("click",function(e){
    console.log("Item-3 is clicked")
})
item4.addEventListener("click",function(e){
    console.log("Item-4 is clicked")
})

 */

/**
 * ! With Event Delegation
 */

const parent=document.getElementById("parent")

parent.addEventListener("click",function(e){
    e.stopPropagation()
    e.stopImmediatePropagation()
    console.log(e.target.textContent)
})