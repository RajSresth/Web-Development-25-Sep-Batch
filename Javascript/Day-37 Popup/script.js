

window.addEventListener("load",function(){
    setTimeout(function(){
        
        //create popup 
        const div= document.createElement("div");
        div.setAttribute("class","popup")
        div.innerHTML=`<div class="top">
                            <h2>Do You want to share your Location?</h2>  
                        </div>
                        <div class="bottom">
                            <button class="btn1" onclick="removePopup()">Ok</button>
                            <button class="btn2" onclick="showPopup()">Cancel</button>
                        </div>`


        //Create Overlay
        const overlay= document.createElement("div");
        overlay.setAttribute("class","overlay");

        const body=document.body;
        body.appendChild(overlay)
        body.appendChild(div)


    }, 2000);
})



function removePopup()
{
    const overlay=document.querySelector(".overlay")
    const popup=document.querySelector(".popup")

    overlay.remove()
    popup.remove()
}


function showPopup()
{

    const overlay=document.querySelector(".overlay")
    const popup=document.querySelector(".popup")

    overlay.remove()
    popup.remove()

    setTimeout(function(){
        
        //create popup 
        const div= document.createElement("div");
        div.setAttribute("class","popup")
        div.innerHTML=`<div class="top">
                            <h2>Do You want to share your Location?</h2>  
                        </div>
                        <div class="bottom">
                            <button class="btn1" onclick="removePopup()" >Ok</button>
                            <button class="btn2" onclick="showPopup()">Cancel</button>
                        </div>`




        //Create Overlay
        const overlay= document.createElement("div");
        overlay.setAttribute("class","overlay");

        const body=document.body;
        body.appendChild(overlay)
        body.appendChild(div)


    }, 2000);
}