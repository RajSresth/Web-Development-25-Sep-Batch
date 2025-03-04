for(let i = 0; i < 4; i++)
{
    setTimeout(function (){
        console.log("Task", i)
    }, i * 1000);
}

for(var i = 0; i < 4; i++)
{
    setTimeout(function (){
        console.log("Task", i)
    }, i * 1000);
}

