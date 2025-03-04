function process(){
    console.log("Start");

    setTimeout(function fun1(){
        console.log("Executed Async function-1..")
    }, 10000);

    setTimeout(function fun2(){
        console.log("Executed Async function-2..")
    }, 5000);

    for(let i=0; i < 10000000; i++)
    {

    }
    
    console.log("End")
}
process()


setTimeout(() => {
    console.log("TATA")
}, 0);




for(let i=0; i < 1000000000; i++)
{

}

