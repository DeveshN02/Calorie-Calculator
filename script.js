let checkbox = document.querySelector(".mode");
let container = document.querySelector(".navbar");
let hero = document.querySelector(".hero");
let link = document.querySelectorAll(".link");

console.log("checkbox",checkbox);
console.log("container",container);

let dark = true;
checkbox.addEventListener("click",()=>{
    if(dark){
        container.classList.add("active");
        hero.classList.add("active");
        link.forEach((event) =>{
            event.classList.add("active");
        })
        
        dark = false;
    }
   

 
    else{
        container.classList.remove("active");
        hero.classList.remove("active");
        link.forEach((event) =>{
            event.classList.remove("active");
        })
        
        dark = true;
    }
   
    
})
checkbox.removeEventListener("click",()=>{

})