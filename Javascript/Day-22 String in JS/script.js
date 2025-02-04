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
 */

const str1="html,css,javascrpt,react"

//output
// const str3="html css javascrpt react"

const arr=str1.split(",")
console.log(arr)    // ["html","css","js","react"]

const newString= arr.join(" ")
console.log(newString)