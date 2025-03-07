/**
 * ! Callback Hell
 
function operation1(callback)
{
    console.log("Operation 1 is Executing..")

    setTimeout(() => {
        let data="tinku";
        callback(data)
    }, 2000);
}

function operation2(a,callback)
{
    console.log("Operation 2 is Executing..")
    setTimeout(() => {
        console.log(a)
        callback()
    }, 2000);
}

function operation3(callback)
{
    console.log("Operation 3 is Executing..")
    setTimeout(() => {
        callback()
    }, 2000);
}

function operation4(callback)
{
    console.log("Operation 4 is Executing..")
    setTimeout(() => {
        callback()
    }, 2000);
}



operation1(function(res){
    console.log("callback-1")

      operation2(res,function(){
        console.log("callback-2")

            operation3(function(){
                console.log("callback-3")

                    operation4( function(){
                        console.log("callback-4")
                    })

            })

      })

})
      */

/**
 * ! 2 Inversion of Control
 */


function createOrder(cart,callback)
{
    callback()
    callback()
}

function payment()
{
    console.log("Payment is Accepted")
}

const cart=["shirt","shoes","Perfumes"]

createOrder(cart,payment)