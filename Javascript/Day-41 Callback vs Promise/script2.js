// createOrder ----> orderId
// payment -------> paymentStatus
// orderSummary -----> noOfDays



function createOrder(cart)
{
    return new Promise(function(resolve,reject){

        if(cart.length > 0)
        {
            const err= new Error("Cart is Empty")
            reject(err)
        }
        else{
            setTimeout(() => {
                const orderId=1122
                resolve(orderId)
            }, 5000);
        }
    })
}

// proceedTo payment

function proceedToPayment(orderId)
{
    console.log("Your Order is Created");
    console.log("Proceed to payment")
    return new Promise(function(resolve,reject)
                    {
                        resolve("success")  
                    })
}




const items=["shirt","shoes","belts"]

createOrder(items)
.then((orderId)=>
    {
            console.log("Order Id",orderId)

     return orderId;
    }
    ,
    function(reject){console.log(reject)}
)
.then((response)=>{
    return proceedToPayment(response)
})
.then(paymentStatus=>{
    console.log(paymentStatus)
})
.catch(err=> console.log(err))



