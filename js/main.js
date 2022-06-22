var elHeader = document.querySelector(".header__inner-wrap");
var elBtn = document.querySelector(".header__menu-btn");

elBtn.addEventListener("click", ( )=>{
    elHeader.classList.toggle("active")
})