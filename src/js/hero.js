const singleItem = document.querySelector(".single-item");
const heroSearchInput = document.querySelector(".hero_search_input");
let searchValue;
heroSearchInput.addEventListener("keyup", () => {
  searchValue = heroSearchInput.value.toLowerCase();
  console.log(searchValue);
  moviesArr.forEach((element) => {
    if (element[0].toLowerCase().includes(searchValue)) {
      console.log("First element contains searchValue");
      // console.log(searchValue);
      //////////////////////////////////////////////////////////////////////
    } else {
      // console.log("First element does not contain searchValue");
    }
  });
});

$(document).ready(function () {
  $(".single-item").slick({
    prevArrow: $(".hero_prev"),
    nextArrow: $(".hero_next"),
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    swipe: false,
  });
});

const createMovieElements = () => {
  singleItem.innerHTML = "";
  moviesArr.forEach((element) => {
    // Create a container div
    const container = document.createElement("div");
    container.className = "hero_movies_item";

    // Create an image element
    const image = document.createElement("img");
    image.src = element[9];
    image.alt = "movie image";

    // Create an h3 element for the first text
    const h3Element = document.createElement("h3");
    h3Element.textContent = element[1];

    // Create an h2 element for the second text
    const h2Element = document.createElement("h2");
    h2Element.textContent = element[0];

    // Append the image, h3, and h2 elements to the container div
    container.appendChild(image);
    container.appendChild(h3Element);
    container.appendChild(h2Element);

    // Append the container to your desired parent element (e.g., a div with the id "container" in this example)
    singleItem.appendChild(container);
  });
};

createMovieElements();
