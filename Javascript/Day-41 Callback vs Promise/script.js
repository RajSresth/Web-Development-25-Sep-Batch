const items=["shirt","shoes","Perfume"];


// 1 createOrder
function createOrder(cart,callback1)
{
    
    console.log("Your Order is Creating..")
    setTimeout(() => {
        const orderId=112233;
        callback1(orderId)
        
    }, 3000);
    
   
}

createOrder(items,function(data)
{
    proceedToPayment(data,function(paymentStatus){
        showOrderSummary(paymentStatus,function(){
            
        })
    })
})

// 2 proceedToPayment

function proceedToPayment(orderId,callback2)
{
    console.log("Order id", orderId)
    console.log("Proceed to payment..")
    setTimeout(() => {
        let status= "success";
        callback2(status)
    }, 5000);
}


// 3 orderSummary