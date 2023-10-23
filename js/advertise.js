//////////////////////////
// modal
// //////////////////////////

let btns = document.querySelectorAll(".main div .mainCard button");

btns.forEach((item) => {
  item.onclick = function () {
    modal.classList.remove("removeModal");
    modal.classList.add("displayModal");
    overlay.classList.add("overlayBlock");
  };
});

closeModal.onclick = function () {
  // modal.classList.remove("displayModal");
  modal.classList.add("removeModal");
  overlay.classList.remove("overlayBlock");
};
overlay.onclick = function () {
  overlay.classList.remove("overlayBlock");
  // modal.classList.remove("displayModal");
  modal.classList.add("removeModal");
};
