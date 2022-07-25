
var header = document.getElementById("header");

var headerClick1 = document.getElementById("header_click_1")
var headerClick2 = document.getElementById("header_click_2")
var headerClick3 = document.getElementById("header_click_3")



var MODELS = document.getElementById("MODELS");
var CUSTOM = document.getElementById("CUSTOM");
var OWENRWIP  = document.getElementById("OWENRWIP");
var MOTORSPORT = document.getElementById("MOTORSPORT");

var navbar = document.getElementById("navbar")

var MODELS__item = document.getElementById("MODELS__item");
var CUSTOM__item = document.getElementById("CUSTOM__item");
var OWENRWIP__item = document.getElementById("OWENRWIP__item");
var MOTORSPORT__item = document.getElementById("MOTORSPORT__item");

var nav = document.getElementById("nav")



let nav__toogle = document.getElementById("nav__toogle")


let navbar____tooogle = document.querySelector(".navbar____tooogle")

nav__toogle.addEventListener("click",function(){
    navbar____tooogle.classList.toggle("navbar____tooogle-block")
})



MOTORSPORT.addEventListener("mouseenter",()=>{
    MODELS__item.classList.remove("nav-display")
    CUSTOM__item.classList.remove("nav-display")
    OWENRWIP__item.classList.remove("nav-display")
    onmousDown( MOTORSPORT__item)
})

MODELS.addEventListener("mouseenter",()=>{
    onmousDown( MODELS__item)
    CUSTOM__item.classList.remove("nav-display")
    OWENRWIP__item.classList.remove("nav-display")
    MOTORSPORT__item.classList.remove("nav-display")
})

CUSTOM.addEventListener("mouseenter",()=>{
    onmousDown( CUSTOM__item)
    MODELS__item.classList.remove("nav-display")
    OWENRWIP__item.classList.remove("nav-display")
    MOTORSPORT__item.classList.remove("nav-display")
})

OWENRWIP.addEventListener("mouseenter",()=>{
    onmousDown(OWENRWIP__item)
    MODELS__item.classList.remove("nav-display")
    CUSTOM__item.classList.remove("nav-display")
    MOTORSPORT__item.classList.remove("nav-display")
})





function onmousDown(count){
count.classList.add("nav-display")
navbar.classList.add("nav-display")
}


header.addEventListener("mouseenter",()=>{
    navbar.classList.remove("nav-display")
    MODELS__item.classList.remove("nav-display")
    CUSTOM__item.classList.remove("nav-display")
    MOTORSPORT__item.classList.remove("nav-display")
    OWENRWIP__item.classList.remove("nav-display")
    navbar____tooogle.classList.remove
    ("navbar____tooogle-block")
})



let arry = [
    "../assets/img/header-1.jpg",
    "../assets/img/hedaer-2.jpg",
    "../assets/img/header-3.jpg" 
]


let header__title = document.querySelector(".header__title")
let textArry = ["TAKE ALL YOUR SOULS TO DRIVE","IT TAKES TIME TO BECOME TIMELS","UNCLOCK ANY ROAD"]

header.style.backgroundImage = `url(${arry[1]})`

headerClick1.addEventListener("click",function(){
    header.style.backgroundImage = `url(${arry[1]})`
    header__title.textContent = textArry[0]
})

headerClick2.addEventListener("click",function(){
    header.style.backgroundImage = `url(${arry[2]})`
    header__title.textContent = textArry[1]
    header__title.style.width = "600px"
})

headerClick3.addEventListener("click",function(){
    header.style.backgroundImage = `url(${arry[0]})`
    header__title.textContent = textArry[2]

    header__title.setAttribute("data-aos","fade-up-right")
    header__title.setAttribute("data-aos-offset0","400")
})


nav.addEventListener("mouseenter",function(){
    navbar.classList.remove("nav-display")
    MODELS__item.classList.remove("nav-display")
    CUSTOM__item.classList.remove("nav-display")
    MOTORSPORT__item.classList.remove("nav-display")
    OWENRWIP__item.classList.remove("nav-display")
})




// section pages



let sectionElement = document.getElementById("section")

let background_1 = document.getElementById("background_1");
let background_2 = document.getElementById("background_2");
let background_3 = document.getElementById("background_3");


let arryImg = [
    "../assets/img2/family_chooser_tecnica.jpg", "../assets/img2/tecnica.jpg","../assets/img2/ultimae_coupe_Compositing_4terzi_00.jpg"
]




// background_1.style.background = `url(${arryImg[0]})`
// background_2.style.background = `url(${arryImg[1]})`
// background_3.style.background = `url(${arryImg[2]})`





// hero pages


var heroElement = document.getElementById("hero");
var hero__title = document.querySelector(".hero__title")

var heroBg1 = document.getElementById("hero_bg_1") 
var heroBg2 = document.getElementById("hero_bg_2") 
var heroBg3 = document.getElementById("hero_bg_3") 

var heroTitlearry = ["CREATE YOUR AVENTADOR", "CREATE YOUR HURACÁN","CREATE YOUR URUS"]
// var heroImg = ["../assets/hero-img/Homepage CC AVANZAMENTO_ultimae_1920_706.jpg","../assets/hero-img/Homepage CC URUS_1920_706.png","../assets/hero-img/model_chooser_tecnica.jpg"]

var heroImg = ["../assets/hero-img/hero-1.jpg","../assets/hero-img/hero-2.png","../assets/hero-img/hero-3.jpg"]

heroElement.style.background = `url(${heroImg[0]})`


heroBg1.addEventListener("click",()=>{
    heroElement.style.background = `url(${heroImg[0]})`
    hero__title.textContent = heroTitlearry[0]
})


heroBg2.addEventListener("click",()=>{
    heroElement.style.background = `url(${heroImg[1]})`
    hero__title.textContent = heroTitlearry[1]

})


heroBg3.addEventListener("click",()=>{
    heroElement.style.background = `url(${heroImg[2]})`
    hero__title.textContent = heroTitlearry[2]

})
