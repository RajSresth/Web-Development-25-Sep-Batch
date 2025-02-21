const btn= document.querySelector("button");

btn.onclick=createOtp

function createOtp()
{
    const numberList="0123456789";
    let otp="";

    for(let i=0; i<6 ;i++)
    {
        otp=otp + numberList[Math.floor(Math.random() * 10)]
    }
   
   const span=document.querySelector("span")
   span.textContent=otp;
}