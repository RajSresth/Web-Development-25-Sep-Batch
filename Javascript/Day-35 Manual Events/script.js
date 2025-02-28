/** 
 * ! By using new Keyword and Event() Constructor

const a= new Event("click",{
                                bubbles:true,
                                cancelable:false,
                                composed:false
})

const parent=document.getElementById("parent");

parent.addEventListener("click",function(){
    console.log("Parent is Executed..!")
})

const btn= document.querySelector("button");
btn.addEventListener("click",function(e){
    console.log("Clicked")
})

btn.dispatchEvent(a);
*/
 

/**
 * ! 2. By using new keyword and  CustomEvent() Constructor
 */

const a = new CustomEvent("logginEvent",{
                                            detail:{
                                                isLogout:true,
                                                data:"Abra ka Dabra"
                                            },
                                            bubbles:true,
                                            cancelable:true,
                                            composed:false
                            })


const btn=document.querySelector("button")

btn.addEventListener("logginEvent",function(e){
    console.log(e)
    console.log(e.detail.data)

    if(!e.detail.isLogout){
        console.log("User is still loggin")
    }
    else{
        console.log("User is logged out..")
    }
})


btn.dispatchEvent(a)
