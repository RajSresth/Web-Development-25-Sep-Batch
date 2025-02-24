const btn= document.querySelector("button")

// ! click
btn.addEventListener("click", function(){
    console.log("Button is clicked..")

    const h1=document.querySelector("h1");
    h1.textContent="Hello Developers..!"
})

// ! dblclick
btn.addEventListener("dblclick",function(){
    const h1=document.querySelector("h1");
    h1.textContent="Doubble Clicked"
})


// ! mouseenter

btn.addEventListener("mouseenter", function(){
    const body= document.body;
    body.style.cssText="background-color:black;color:white;"
})


// ! mouseleave

btn.addEventListener("mouseleave", function(){
    const body= document.body;
    body.style.cssText="background-color:white;color:black;"
})


// ! contextmenu :- it is for right click on the mouse
btn.addEventListener("contextmenu",function (e) {
    e.preventDefault()  // to stop the default behaviour of righ click on the browser
    console.log("Right clicked..!!")
})
