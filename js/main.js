var elHeader = document.querySelector(".header__inner-wrap");
var elBtn = document.querySelector(".header__menu-btn");

elBtn.addEventListener("click", ( )=>{
    elHeader.classList.toggle("active")
})

var elFaq = document.querySelector(".faq__inner-wrap");
var elButton = document.querySelector(".faq__qiestion-btn")

elButton.addEventListener("click", ( )=>{
    elFaq.classList.toggle("faq__open")
})