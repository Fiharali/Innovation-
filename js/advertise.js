

//////////////////////////
// modal
// //////////////////////////

let btns = document.querySelectorAll(".main div .mainCard button");

btns.forEach((item) => {
  item.onclick = function () {
    modal.classList.remove("removeModal");
    modal.classList.add("displayModal");
  };
});

closeModal.onclick = function () {
  modal.classList.remove("displayModal");
  modal.classList.add("removeModal");
};