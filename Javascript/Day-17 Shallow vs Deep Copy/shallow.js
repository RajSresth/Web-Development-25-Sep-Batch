/**
 * ! Shallow copy in array



const skills=["html","css"];
const new_skills=skills;

new_skills.push("Js")
console.log(new_skills)
console.log("Old skills", skills)
 */

/**
 * ! shallow copy in object


const jack={
    cake:"Rasmalai cake"
}

const oggy=jack;
delete oggy.cake;
console.log(oggy)
console.log(jack)
 */


/**
 * ! Deep copy in object using for-in loop
 
const jack={
    cake:"Rasmalai"
}

// step-1 create an empty object
const oggy={}

// step-2 use for-in loop

for(element in jack)
{
    // step-3 initialize key value pair inside oggy object
    oggy[element]= jack[element]
}

jack["tool"]="Knife";

console.log(jack)
console.log(oggy)

*/

/**
 * ! Deep copy in array using for-of loop
 */

const old_skills=["html", "css"];

// step-1 create an empty array
const new_skills=[]

// step-2 use for-of loop

for (element of old_skills) 
{
    new_skills.push(element);   
}

new_skills.push("js");
console.log(old_skills)
console.log(new_skills)