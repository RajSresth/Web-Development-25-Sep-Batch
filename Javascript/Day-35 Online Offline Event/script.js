const statusDiv= document.getElementById("statusDiv");

function updateStatus(){
    if(navigator.onLine)
    {
        statusDiv.textContent=`✅ You are ONLINE.`;
        statusDiv.style.background="lightgreen";
    }
    else{
        statusDiv.textContent=`❌ You are OFFLINE.`;
        statusDiv.style.background="lightcoral";
    }
}

updateStatus()
window.addEventListener("online",updateStatus)
window.addEventListener("offline",updateStatus)