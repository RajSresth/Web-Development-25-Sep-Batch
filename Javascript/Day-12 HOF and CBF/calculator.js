// HOF
function calculator(a,task,b)
{
    console.log("Inside calculator Function")
    console.log(task(a,b))
    console.log("Calculation Done..!!")
}

// Callback function
const sum=(m,n)=>m+n;
const sub=(m,n)=>m-n;
const prod=(m,n)=>m*n;
const div=(m,n)=>m/n;
const pow=(m,n)=>m**n;

// User Input
const n1=+prompt("Enter first number");  //5
const oper=prompt("Enter your Operation +,-,*,/,**");  //  '+'
const n2=+prompt("Enter last number")


switch (oper) {
    case '+':
        calculator(n1,sum,n2)
        break;

    case '-':
        calculator(n1,sub,n2)
        break;

    case '*':
        calculator(n1,prod,n2)
        break;

    case '/':
        calculator(n1,div,n2)
        break;

    case '**':
        calculator(n1,pow,n2)
        break;

    default:
        alert("Invalid Operation passed by the user..!")
        break;
}