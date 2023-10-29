// const listContainer = document.querySelector(".list_container");
const movieListsMain = document.querySelector(".movie_lists");
// const moviesList = document.querySelector(".list_carousel");
let slides = 5;
let listCount = 5;
let btnPrevClassName = ".prev_";
let btnNextClassName = ".next_";
let listClassName = ".list_";
let listsCount;

//Generating Movies Content
const generateMoviesList = (width) => {
  movieListNames.forEach((heading, index) => {
    const listContainer = document.createElement("div");
    listContainer.classList.add("list_container");

    const moviesList = document.createElement("div");
    moviesList.classList.add("list_carousel");
    moviesList.classList.add(`list_${index}`);

    const movieHeading = document.createElement("h2");
    movieHeading.innerText = heading;

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content_div");

    const btnDiv = document.createElement("div");
    btnDiv.classList.add("movie_lists_buttons");

    const btnPrev = document.createElement("button");
    btnPrev.classList.add("movieList_prev");
    btnPrev.classList.add(`prev_${index}`);

    const imgPrev = document.createElement("img");
    imgPrev.src = "../images/movieListArrowLeft.png";
    imgPrev.alt = "left_arrow";
    btnPrev.appendChild(imgPrev);

    const btnNext = document.createElement("button");
    btnNext.classList.add("movieList_next");
    btnNext.classList.add(`next_${index}`);

    const imgNext = document.createElement("img");
    imgNext.src = "../images/movieListArrowRight.png";
    imgNext.alt = "right_arrow";
    btnNext.appendChild(imgNext);

    //Checking the width for displaying buttons
    console.log(width);

    // if (width < 450) {
    //   btnDiv.innerHTML = "";

    const collapseBtn = document.createElement("button");
    collapseBtn.classList.add("collapse_btn");

    const imgCollapse = document.createElement("img");
    imgCollapse.src = "../images/movieListArrowCollapse.png";
    imgCollapse.alt = "collapse_arrow";

    collapseBtn.appendChild(imgCollapse);
    btnDiv.appendChild(collapseBtn);

    collapseBtn.addEventListener("click", () => {
      listContainer.classList.toggle("collapsed_active");
      imgCollapse.classList.toggle("collapsed_btn_active");
    });
    // } else {
    // btnDiv.innerHTML = "";
    btnDiv.appendChild(btnPrev);
    btnDiv.appendChild(btnNext);
    // }
    ///////////////

    listContainer.appendChild(btnDiv);
    listContainer.appendChild(contentDiv);
    contentDiv.appendChild(movieHeading);
    contentDiv.appendChild(btnDiv);

    moviesArr.forEach((element) => {
      const movieLink = document.createElement("a");
      movieLink.href = "#";
      movieLink.className = "list_movie";

      const movieImg = document.createElement("img");
      movieImg.src = element[8];

      movieLink.appendChild(movieImg);
      moviesList.appendChild(movieLink);
      listContainer.appendChild(moviesList);
      movieListsMain.appendChild(listContainer);
    });
    listCount = index;

    //Active checker if the window gets smaller in width
    // $(window).resize(function () {
    //   if (window.innerWidth < 450) {
    //     btnDiv.innerHTML = "";

    //     const collapseBtn = document.createElement("button");
    //     collapseBtn.classList.add("collapse_btn");

    //     const imgNext = document.createElement("img");
    //     imgNext.src = "../images/movieListArrowCollapse.png";
    //     imgNext.alt = "collapse_arrow";

    //     collapseBtn.appendChild(imgNext);
    //     btnDiv.appendChild(collapseBtn);

    //     collapseBtn.addEventListener("click", () => {
    //       listContainer.classList.toggle("collapsed_active");
    //       imgNext.classList.toggle("collapsed_btn_active");
    //     });
    //   } else {
    //     btnDiv.innerHTML = "";
    //     btnDiv.appendChild(btnPrev);
    //     btnDiv.appendChild(btnNext);
    //   }
    // });
    // /////////

    createCarousel(
      moviesList.classList[1],
      btnPrev.classList[1],
      btnNext.classList[1]
    );
  });
};

let width = window.innerWidth;
generateMoviesList(width);

///////////////////////////////////////////////////////////
// Carousel Functions
function createCarousel(carousel, btnPrev, btnNext) {
  console.log("Carousel created");
  $(document).ready(function () {
    $(`.${carousel}`).slick({
      slidesToShow: 6 - 0.5,
      slidesToScroll: 6,
      infinite: false,
      prevArrow: false,
      nextArrow: false,
      draggable: false,
      swipe: false,
      prevArrow: $(`.${btnPrev}`),
      nextArrow: $(`.${btnNext}`),
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5.5,
            slidesToScroll: 6,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4.5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 450,
          settings: "unslick",
        },
      ],
    });
  });
}

function changeParams(count) {
  $(document).ready(function () {
    $(`${listClassName}${count}`).slick({
      slidesToShow: 6 - 0.5,
      slidesToScroll: 6,
      infinite: false,
      prevArrow: false,
      nextArrow: false,
      draggable: false,
      swipe: false,
      prevArrow: $(`.${btnPrev}`),
      nextArrow: $(`.${btnNext}`),
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5.5,
            slidesToScroll: 6,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4.5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 450,
          settings: "unslick",
        },
      ],
    });
  });
}

// function changeParamsLoop(slidesCount) {
//   for (let i = 0; i <= listCount; i++) {
//     changeParams(slidesCount, i);
//   }
// }

// $(window).resize(function () {
// if (window.innerWidth > 450) {
//   if (window.innerWidth < 650) {
//     changeParamsLoop(3);
//   } else if (window.innerWidth < 800) {
//     changeParamsLoop(3);
//   } else if (window.innerWidth < 900) {
//     changeParamsLoop(4);
//   } else if (window.innerWidth < 1200) {
//     changeParamsLoop(5);
//   } else if (window.innerWidth < 1400) {
//     changeParamsLoop(6);
//   }
// }
// getWidthParams(window.innerWidth);
// });

$(window).resize(function () {
  if (window.innerWidth < 450) {
  }
});

// function getWidthParams(width) {
//   if (width > 450) {
//     if (width < 650) {
//       changeParamsLoop(3);
//     } else if (width < 800) {
//       changeParamsLoop(3);
//     } else if (width < 900) {
//       changeParamsLoop(4);
//     } else if (width < 1200) {
//       changeParamsLoop(5);
//     } else if (width < 1400) {
//       changeParamsLoop(6);
//     }
//   }
// }

///////////////////////////////////////////////////////////
