function process(){
    console.log("Start");

    setTimeout(function(){
        console.log("Executed Something..")
    }, 3000);

    for(let i=0; i < 100000000; i++)
    {

    }

    console.log("End")
}

process()
console.log("TATA")