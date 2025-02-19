const body = document.body;
const chombu = document.getElementById("chombu")



/**
 * ! document.getElementsByClassName("")
 
const items = document.getElementsByClassName("item");

// TODO: Convert Html collection into Array
// ! Array.from()
const arr= Array.from(items)
arr[2].textContent="JavaScript";
// arr[2].style.color="red";
// arr[2].style.fontSize="25px";
arr[2].style.cssText="color:red; font-size:25px;"


arr[3].textContent="ReactJs";
// arr[3].style.color="blue";
arr[3].style.cssText="color:blue; font-size:30px;"
*/


/**
 * ! document.getElementsByTagName("")

const div= document.getElementsByTagName("div");
div[0].style.background="black";
div[0].style.color="white";
 */

/**
 * ! document.querySelector("")
 

const div = document.querySelector(".parent")

console.log("Child Nodes",div.childNodes)
// console.log("Actual Childs",div.children)
// console.log("No of Childrens",div.childElementCount)

// const lastItem = document.querySelector(".parent :last-child");
// lastItem.style.textTransform="lowercase";

*/

/**
 * ! document.querySelectorAll()


const items1= document.getElementsByClassName("item")  //Html collection
const items2 = document.querySelectorAll(".item") //Nodelist


items2[3].remove();

console.log(items1)
console.log(items2)




const list= document.querySelectorAll(".item");

list.forEach(element=>{
    element.style.color="magenta";
})
 */

/* CRUD = create, read, update and delete */

