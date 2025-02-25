const form = document.getElementById("form")
let count=1;

form.addEventListener("submit",function(event){
    event.preventDefault() // It prevent the page reload

    const table= document.querySelector("table")
    console.log(table)
    const inp1= document.getElementById("inp1");
    const inp2= document.getElementById("inp2");
    const inp3= document.getElementById("inp3");

   if(inp1.value.trim() !== "" && inp2.value.trim() !== "" && inp3.value.trim() !== "")
   {
            const username=inp1.value;
            const email=inp2.value;
            const password= inp3.value;

            const tr=document.createElement("tr");

            tr.innerHTML=`<td>${count++}</td>
                        <td>${username}</td>
                        <td>${email}</td>
                        <td>${password}</td>`

            table.append(tr)
   }
   else{
        alert("Invalid Details..!")
   }
})