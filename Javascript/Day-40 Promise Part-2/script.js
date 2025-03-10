/**
 * ! Question-1
 */
console.log("start");

function fetchData1()
{
    console.log("fetching from server")

    const p1 = new Promise(function parent(resolve,reject){
            
        setTimeout(() => {
            console.log("Promise object is created")
            resolve(201301)
        }, 5000);
    })

    return p1;
}

console.log("function is going to call")
const x= fetchData1();
console.log(x)
console.log("End")

console.log("===============================")

/**
 * ! Question No-2
 */

console.log("start")  //1

function fetchData2()
{
    console.log("Fetching from server");  //3

   return  new Promise(function parent(resolve,reject)
                        {
                            for(let i=0; i< 1000000; i++)
                            {
                            }
                            console.log("Promise Object is Created..")
                            resolve()
                        }
                    )
}

console.log("Function is going to call..")  //2
const y= fetchData2();
console.log(y)
console.log("End")