const obj1={
    name:"Salman Khan",
}
const obj2={
    name:"Shahrukh Khan",
   
}
const obj3={
    name:"Amir Khan",   
}

function meme(){
    console.log(this);
    console.log(`Hello i'm ${this.name}`);
}

meme.call(obj1)
meme.call(obj2)
meme.call(obj3)


const obj={
    name:"Sid",
    greet:function(){
          //  console.log(this);   obj
            
                function inner()
                {
                    console.log(this)   // obj
                }

            inner.call(this)
    }
}

obj.greet()


