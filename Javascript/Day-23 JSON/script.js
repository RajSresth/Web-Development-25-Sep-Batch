const obj1={
    carname:"Thar",
    price:"20Lac",
    color:"Black"
}

// ! convert js object into json

const obj2=JSON.stringify(obj1)


localStorage.setItem("data",obj2)