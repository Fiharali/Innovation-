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
