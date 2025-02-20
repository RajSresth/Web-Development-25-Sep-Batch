const hero= document.getElementById("hero");

/**
 *  ! setAttribute("Attribute name","value of attribute")
hero.setAttribute("class","chombu")

// ! getAttribute("attribute name")

const prev=hero.children[0].getAttribute("class")
hero.children[0].setAttribute("class",prev + " div1")
 */
/**
 * ! removeAttribute("attribute name")
 const item3= hero.children[2]
item3.removeAttribute("title")
console.log(item3)
*/
// ! rename attribute
const item1= hero.children[0] 
const x=item1.getAttribute("class")
item1.removeAttribute("class")
item1.setAttribute("id",x)

// ! classList
// const div1=document.getElementById("div1")

/**
console.log(div1.classList)
console.log(div1.classList.add("minku"))
console.log(div1.classList.remove("chiki"))
console.log(div1.classList.contains("minku"))
 */

/**
 * 1. add("value")
 * 2. remove("value")
 * 3. toggle("value")
 * 4. contains("value")  true or false
 * 5. replace("old value","new value")
 * 6. values()
 */

const div1=document.getElementById("div1")
// div1.classList.toggle("dinga")
console.log(div1.classList.value)
console.log(div1.classList.replace("dingi","tinku"))
console.log(div1.classList.value)