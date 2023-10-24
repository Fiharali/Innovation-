hslide1.onclick = function () {
  slideToShow2.classList.add("slideHide");
  slideToShow3.classList.add("slideHide");
  slideToShow1.classList.remove("slideHide");

  hslide1.classList.add("slideDesign");
  hslide2.classList.remove("slideDesign");
  hslide3.classList.remove("slideDesign");
};

hslide2.onclick = function () {
  slideToShow1.classList.add("slideHide");
  slideToShow3.classList.add("slideHide");
  slideToShow2.classList.remove("slideHide");

  hslide2.classList.add("slideDesign");
  hslide1.classList.remove("slideDesign");
  hslide3.classList.remove("slideDesign");
};

hslide3.onclick = function () {
  slideToShow2.classList.add("slideHide");
  slideToShow1.classList.add("slideHide");
  slideToShow3.classList.remove("slideHide");

  hslide3.classList.add("slideDesign");
  hslide2.classList.remove("slideDesign");
  hslide1.classList.remove("slideDesign");
};

//////////////////////////////////////////////////::
/////////////////native slider////////////////////::
//////////////////////////////////////////////////::
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slides = document.querySelectorAll(".superheros .slideNative");
const totalSlides = slides.length;
let index = 0;
//  console.log(totalSlides);

function nextSlide(dir) {
  if (dir == "next") {
    index++;
    if (index == totalSlides) {
      index = 0;
    } else {
      //
    }
  } else {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

prev.addEventListener("click", () => {
  nextSlide("next");
  console.log("jfsv");
});

next.addEventListener("click", () => {
  nextSlide("prev");
});
