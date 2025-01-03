/**
*    ! concept-1
console.log("Start")

function movie(n)
{
    console.log(`Person: ${n}`)
    Base Case
    if(n === 1)
    {
        return true;
    }

    return movie(n-1)
}

console.log("Response:",movie(5))
 */



/* write a function that prints the sum of first 100 natural numbers?

  function findSum(start,end)
  {
        let sum=0;
        for(let i=1;i<=100;i++)
        {
            sum=sum+i;
            //0+1+2+3+4+5......100
        }
        return sum;
  }

  console.log("Sum is ",findSum(1,100)) */



  /*
   ! Recursion Method
  

   function sum(n)
   {
            if(n=== 1)
            {
                return 1;
            }
            return n + sum(n-1);
   }

   console.log("Sum is",sum(3))

*/

//2. Write a function that calculates power?

// function findPower(base,exponent)
// {
//     return base**exponent;
// }

// function findPower(base,exponent)
// {
//     return Math.pow(base,exponent)
// }

/* method-3
function findPower(base,exp)
{
    let pow=1;

    for(let i=1;i<=exp;i++)
    {
        pow=pow*base;
    }

    return pow;
}

console.log(findPower(10,3))
*/

/* Method-4 */


function power(b,e) {
    if(e === 1)
    {
        console.trace("Base Condition satisfied")
        return b
    }
    console.trace(`Exponent: ${e}`)
    return b * power(b,e-1)
}

console.log(power(10,3))    