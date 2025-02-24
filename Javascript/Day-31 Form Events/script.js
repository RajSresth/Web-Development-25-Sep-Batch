const input1= document.querySelector(".input1")
const input2= document.querySelector(".input2")
const input3= document.querySelector(".input3")

input1.addEventListener("input",function(){
    console.log(input1.value)
})

input2.addEventListener("change",function(){
    console.log(input2.value)
})

input3.addEventListener("focus",function(){
    console.log("focused..")
    this.style.background="yellow"
})

input3.addEventListener("blur",function(){
     console.log("control is outside of input3")
    this.style.background="white"
})