/*
This program shows the basic concepts
of javascript
*/
console.log("Hello World");

//var(deprecated), let, const
let a = 2 + 5 * (9 + 5) / 4;
console.log(a); // Looging a on the console 

const training = "DCI Resources";

function greet(name) {
    console.log("Hello" + name);
}

function test() {
    console.log("Testing when this will be printed"); 
}

setTimeout(test, 5000);
greet("Gabriel");

console.log("Comes Here");

const helloBtn = document.querySelector("#sayHello");

helloBtn.addEventListener ("click", function(response) {
    alert("Hello!");
});

helloBtn.addEventListener("mouseover", function() {
    console.log("mouse hover");
});

const languages = document.querySelectorAll("#coding li");

//adding an even listener to each li element inside id coding
//when that event happens, add blue background
for (language of languages) { // in java for-each : for(Element language : languages)

    language.addEventListener("click", function() {

        this.classList.add("blueBg")

    })
}

const timep = document.querySelector("#currentTime")
const buttontime = document.querySelector("#time")

buttontime.addEventListener("click", () => {
    
    let date = new Date()
    timep.innerHTML = date

})

