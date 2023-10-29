//hamburger menu
const exitHamburgerBtn = document.querySelector(".exit_hamburger");
const hamburgerContent = document.querySelector(".hamburger_content");
const menu = document.querySelector(".menu");
const search = document.querySelector(".search");
const searchInput = document.querySelector(".search_input");
const header = document.querySelector(".header");
const mainHeaderTheme = document.querySelector("header_theme");
const body = document.querySelector("body");
const footerContent = document.querySelector(".footer_content");
let isWhite = true;

//AddEventListeners
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
    openingContent[index].classList.toggle("active");
    arrow[index].classList.toggle("rotate");

    if (index == 1 && openingContent[index].classList.contains("active")) {
      openingContent[index].style.height = "80px";
    } else if (
      index == 1 &&
      !openingContent[index].classList.contains("active")
    ) {
      openingContent[index].style.height = "0px";
    }
  });
});

//Theme Logic
const themeBtn = document.querySelector(".page_theme");
const themeBtnHamburger = document.querySelector(".page_theme_hamburger");

function themeListener(button) {
  button.addEventListener("click", () => {
    if (!isWhite) {
      isWhite = true;
    } else {
      isWhite = false;
    }
    changeThemes();
    changeHeaderTheme();
    isChanged = true;
  });
}

themeListener(themeBtn);
themeListener(themeBtnHamburger);

window.addEventListener("scroll", () => {
  changeHeaderTheme();
});

function changeThemes() {
  body.classList.toggle("scrolled_white");
  hamburgerContent.classList.toggle("scrolled_white");
  footerContent.classList.toggle("footer_light_theme");
}

function changeHeaderTheme() {
  if (window.scrollY > 200) {
    if (!isWhite) {
      header.classList.add("scrolled_white");
      header.classList.remove("scrolled_dark");
    } else if (isWhite) {
      header.classList.remove("scrolled_white");
      header.classList.add("scrolled_dark");
    }
  } else {
    header.classList.remove("scrolled_white");
    header.classList.remove("scrolled_dark");
  }
}

// function changeThemes() {
//   if (window.scrollY > 200) {
//     if (!isWhite) {
//       //Header
//       header.classList.add("scrolled_white");
//       header.classList.remove("scrolled_dark");
//     } else if (isWhite) {
//       //Header
//       header.classList.add("scrolled_dark");
//       header.classList.remove("scrolled_white");
//     }
//   } else {
//     //Header
//     header.classList.remove("scrolled_dark");
//     header.classList.remove("scrolled_white");
//   }

//   if (!isWhite) {
//     //hamburgerContent
//     hamburgerContent.classList.add("scrolled_white");
//     hamburgerContent.classList.remove("scrolled_dark");

//     //Body
//     body.classList.add("scrolled_white");
//     body.classList.remove("scrolled_dark");

//     //Footer

//     footerContent.classList.toggle("footer_light_theme");
//     // footerContent.classList.remove("scrolled_dark");
//   } else if (isWhite) {
//     //hamburgerContent
//     hamburgerContent.classList.toggle("scrolled_dark");
//     hamburgerContent.classList.remove("scrolled_white");

//     //Body
//     body.classList.add("scrolled_dark");
//     body.classList.remove("scrolled_white");
//   } else {
//     //hamburgerContent
//     hamburgerContent.classList.remove("scrolled_white");
//     hamburgerContent.classList.remove("scrolled_dark");

//     //Body
//     body.classList.remove("scrolled_white");
//     body.classList.remove("scrolled_dark");
//   }
// }
