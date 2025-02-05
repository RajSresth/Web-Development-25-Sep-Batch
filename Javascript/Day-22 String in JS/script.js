/**
 * ! Ways to create string


const str1="Hello";
const str2='Hii';
const course="Javascript";

//Template string, Interpolation
const str3=`Welcome to our new ${course} course`; 

/**
 * ! Second way using new keyword and String constructor
 
const str=new String(10)
console.log(str)
 */

/**
 * ! String Inbuild method
 */

// console.log(str.length)

// const str="    Hello    ";

// const newStr=str.toUpperCase()
// const newStr=str.toLowerCase()

// console.log(str.trimStart())
// console.log(str.trimEnd());
// console.log(str.trim())



/**
 * ! slice(strating index, ending index + 1)
 

const str="Welcome to our brand new Javascript Course"

// const newStr= str.slice(15,25)

const newStr= str.slice(-18,-1)
console.log(newStr);
*/
/**
 * ! subString()


const msg="Namaste Developers"

const newStr= msg.substring(0,7)

console.log(newStr)
 */

/**
 * ! replace("old value","new value") and replaceAll()
 

const msg="Welcome JS to the new JS Course";

// msg[0]= "E";
// console.log(msg)

const newStr=msg.replaceAll("JS", "JavaScript")
console.log(newStr)
*/

/**
 * ! split(separator)
 
const str1="html,css,javascrpt,react"
const str2="html-css-javascrpt-react"
const str3="html css javascrpt react"

const res=str3.split(" ")
console.log(res)
*/

/**
 * ! join()


const str1="html,css,javascrpt,react"

//output
// const str3="html css javascrpt react"

const arr=str1.split(",")
console.log(arr)    // ["html","css","js","react"]

const newString= arr.join(" ")
console.log(newString)
 */

/**
 * ! indexOf() and lastIndexOf()


const str="Javascript is dynamic is language";

const res1=str.indexOf("is");
const res2=str.lastIndexOf("is")
console.log(res1)
console.log(res2)
 */

/**
 * ! includes()

const str="Javascript is dynamic is language";
const res=str.includes("dynamic");
console.log(res);
 */

/**
 * ! startsWith() and endsWidth()


const skill="Node Js"
console.log(skill.startsWith("Node"))
console.log(skill.endsWith("js"))
 */

/**
 * ! padStart() and padEnd()


const str="Hello";
const res=str.padStart(6,".");
console.log(res)



const str2="Why";
const res2=str2.padEnd(str2.length+1,"?")
console.log(res2)
 */ 

/**
 * ! question anagram
*/


function findAnagram(str1,str2)
{
    if(str1.length !== str2.length)
    {
       return `false : ${str1} !=== ${str2} length is not equal`
    }

    const s1= str1.toLowerCase().split("").sort().join("");
    const s2= str2.toLowerCase().split("").sort().join("");
   
    return (s1 === s2 ? true : false);
}

const res=findAnagram("cat","TaC");
console.log(res)



