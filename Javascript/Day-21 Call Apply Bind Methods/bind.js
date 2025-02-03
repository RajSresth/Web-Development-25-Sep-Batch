const obj={
    name:"SRK",
    dialog:function(){
            console.log(this);  // obj

            function inner()
            {
                console.log(this)
            }

            return inner.bind(this);  //bind(obj)
    }
}

const res=obj.dialog();
console.log(res)
res()

