/** shift key shortcut
window.addEventListener("keypress",function(e){
    if(e.shiftKey  && e.key.toLowerCase()==='a')
    {
        const body=document.body;
        body.style.cssText=`background-color:black;color:white;`
    }
    else{
        alert("Invalid Key press")
    }
});

 */

/**
 * ! for ctrl key
 */

window.addEventListener("keydown",function(e){
    const body=document.body;
    e.preventDefault()
    
    if(e.ctrlKey && e.key.toLowerCase() === "d")
    {
        console.log("Dark Mode")
        body.style.cssText=`background-color:black;color:white;`
    }    
})

window.addEventListener("keyup",function(e){
    const body=document.body;
    e.preventDefault()
    
    if(e.ctrlKey && e.key.toLowerCase() === "d")
    {
        console.log("Light Mode")
        body.style.cssText=`background-color:white;color:black;`
    }    
})