
let count=1;
const greet=()=>{
    console.log(count++,"GM Developers..")
}

const x= setInterval(greet,1000);


setTimeout(() => {
    clearInterval(x)
}, 5500);