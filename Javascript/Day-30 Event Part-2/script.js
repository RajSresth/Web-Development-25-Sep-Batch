const btn= document.querySelector("button");

/**
btn.addEventListener("click",function(){
    const body= document.body;
    body.style.cssText="background-color:black;color:white;";
})

 */
function darkMode(){
    const body= document.body;
    body.style.cssText="background-color:black;color:white;";
}


btn.addEventListener("click",darkMode)
btn.removeEventListener("click",darkMode)


