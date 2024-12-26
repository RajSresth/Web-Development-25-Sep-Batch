var user="Tinku";

    {
        console.log("Inside a Local Scope");

        function details(age,city)
        {
            var pin=110006;
            console.log(age)
            console.log(city)
            return `GM ${user}`;
        }
    }

let x=details(21,"Noida")
console.log(x)
