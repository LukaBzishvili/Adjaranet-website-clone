//hamburger menu
const exitHamburgerBtn = document.querySelector(".exit_hamburger");
const hamburgerContent = document.querySelector(".hamburger_content");
const menu = document.querySelector(".menu");
const search = document.querySelector(".search");
const searchInput = document.querySelector(".search_input");
const header = document.querySelector(".header");
const mainHeaderTheme = document.querySelector("header_theme");
const body = document.querySelector("body");
// const mobileHeaderTheme = document.querySelector("");

//AddEventListeners
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

search.addEventListener("click", () => {
  searchInput.classList.toggle("active_search_input");
});

menu.addEventListener("click", () => {
  hamburgerContent.classList.toggle("active_hamburger_content");
});

exitHamburgerBtn.addEventListener("click", () => {
  hamburgerContent.classList.remove("active_hamburger_content");
});

//hamburger menu opening lists
const openingList = document.querySelectorAll(".opening_list");
const openingContent = document.querySelectorAll(".opening_content");
const arrow = document.querySelectorAll(".arrow");

openingList.forEach((element, index) => {
  element.addEventListener("click", () => {
    console.log(index);
    openingContent[index].classList.toggle("active");
    arrow[index].classList.toggle("rotate");
  });
});
