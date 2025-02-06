
//! constructor function
function Address(a,b,c)
{
    this.city=a;
    this.state=b;
    this.pinCode=c;   
}

function CreateObject(username,age,city,state,pin)
{
    this.userName=username;
    this.userAge=age;
    this.address= new Address(city,state,pin);
}

const obj1= new CreateObject("Tinku",21,"Noida","UP",201301);
console.log(obj1);