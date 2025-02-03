const obj={
    name:"Tinku",
    age:24
}

function details(city,pin)
{
    console.log("Username:",this.name)
    console.log("age:",this.age)
    console.log("City:",city)
    console.log("pincode:",pin)
}
// details.call(obj,"Noida",201301);
details.apply(obj,["Noida",201301])
