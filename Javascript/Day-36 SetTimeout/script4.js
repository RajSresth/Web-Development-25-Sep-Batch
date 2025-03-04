function process()
{
    console.log("Start");

    for(var i=0; i< 3; i++)
    {

        setTimeout(function fun() {
            console.log("Executed Something")
        }, 3000);

        console.log("Inside a Loop")
    }

    for(var j = 0; j< 1000000; j++)
    {

    }
    console.log("End")
}  

process()