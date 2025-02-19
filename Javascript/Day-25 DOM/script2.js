/**
 * ! createElement()


const h1= document.createElement("h1");

h1.textContent="Hello World from Js"

// Get reference of body
const parent=document.body;


// insert h1 tag inside body tag
parent.appendChild(h1)
 */


/**
 * 1. Element creation
 * 2. add textcontent inside newly created element
 * 3. Get reference of parent element
 * 4. use appendChild method to insert newly created element



const item4=document.createElement("li");
item4.textContent=`ReactJs`;

const ul= document.querySelector("ul");

ul.appendChild(item4)
 */

/**
 * ! First Child
 *  

const item1=document.createElement("li");
item1.innerHTML=`<b>Html</b>`

const ul1=document.querySelector("ul");
ul1.insertAdjacentElement("afterbegin",item1);
*/

/**
 * ! for last child
 

const item4= document.createElement("li");

item4.innerHTML=`<strong>
                        <span>ReactJs</span>
                </strong>`;

const ul2=document.querySelector("ul");
ul2.insertAdjacentElement("beforeend",item4)
*/


/**
 * ! first sibling
 

const h2= document.createElement("h2");
h2.textContent=`Starting of Unordered List`;

const ul =document.querySelector("ul")

ul.insertAdjacentElement("afterend",h2)
*/

/**
 * ! How to add sibling bw items
 */

const item2= document.createElement("li");
item2.textContent=`CSS`;
const item1= document.querySelector("ul>:first-child");
item1.insertAdjacentElement("afterend",item2);


const item3=document.createElement("li");
item3.textContent="bootstrap"
const last=document.querySelector("ul>:last-child")
last.insertAdjacentElement("beforebegin",item3)
