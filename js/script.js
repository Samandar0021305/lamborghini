let header = document.getElementById("header");

let headerClick1 = document.getElementById("header_click_1")
let headerClick2 = document.getElementById("header_click_2")
let headerClick3 = document.getElementById("header_click_3")




let arry = [
    "../assets/img/header-1.jpg",
    "../assets/img/hedaer-2.jpg",
    "../assets/img/header-3.jpg" 
]

header.style.backgroundImage = `url(${arry[2]})`

headerClick1.addEventListener("click",function(){
    header.style.backgroundImage = `url(${arry[2]})`
})

headerClick2.addEventListener("click",function(){
    header.style.backgroundImage = `url(${arry[1]})`
})

headerClick3.addEventListener("click",function(){
    header.style.backgroundImage = `url(${arry[0]})`
})