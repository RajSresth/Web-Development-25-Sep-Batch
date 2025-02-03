const obj={
    username:"chombu",
    age:21
}

function task(state,isWorking){

    console.log(`Hello i'm ${this.username} and age ${this.age}`);
    console.log(state)
    console.log(isWorking)
}

const x=task.bind(obj,"Delhi",true)

export default x;
