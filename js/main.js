var elHeader = document.querySelector(".header__inner-wrap");
var elBtn = document.querySelector(".header__menu-btn");

elBtn.addEventListener("click", ( )=>{
    elHeader.classList.toggle("active")
})

var items = document.getElementsByClassName("faq__list-item");

for (var i = 0; i < items.length; i++) {
  items[i].onclick = function () {
    this.classList.toggle("faq__open");
  };
};

