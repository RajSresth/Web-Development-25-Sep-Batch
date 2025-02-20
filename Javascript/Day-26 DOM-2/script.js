/**
 * ! innerHTML
 

const hero= document.getElementById("hero");
const myImage="https://m.media-amazon.com/images/M/MV5BMWI4N2Y5NWUtNzEwOC00YjYzLWEzY2ItN2YwYTIxYzBjZGZmXkEyXkFqcGc@._V1_.jpg"

// hero.textContent="<h1>Hello i am hero section</h1>"

hero.innerHTML=`<div class="card">
                     <div class="profile">
                        <img src=${myImage} >
                     </div>   
                     <div class="btns">
                        <a href="">Book Now</a>
                        <a href="">Read More</a>
                     </div>
                </div>`
*/

const hero= document.getElementById("hero")

console.log(hero.innerText)   // visibile text
console.log(hero.textContent)   // visbile text hiddent text
console.log(hero.innerHTML)     //  <span>Visible text</span> <p>Hiddent Text</p>
console.log(hero.outerHTML)

/**
 *  <section id="hero">
        <span>Visible Content</span>
        <p style="display: none;">Hiddent text</p>
    </section>
 */