let home=document.querySelector("#home");
let about=document.querySelector("#about");
let services=document.querySelector("#Services");
let skills=document.querySelector("#Skills");
let project=document.querySelector("#project");
let contact=document.querySelector("#contact");

let value=this.window.scrollY;
console.log(value);

home.addEventListener("click",function(){
    window.scrollTo({
         top: 0,
        behavior: 'smooth'
    })
});

about.addEventListener("click",function(){
    window.scrollTo({
         top: 668,
        behavior: 'smooth'
    })
});

services.addEventListener("click",function(){
    window.scrollTo({
         top: 1329,
        behavior: 'smooth'
    })
});

skills.addEventListener("click",function(){
    window.scrollTo({
         top: 1996,
        behavior: 'smooth'
    })
});

project.addEventListener("click",function(){
    window.scrollTo({
         top: 2680,
        behavior: 'smooth'
    })
});

contact.addEventListener("click",function(){
    window.scrollTo({
         top: 3590,
        behavior: 'smooth'
    })
});

