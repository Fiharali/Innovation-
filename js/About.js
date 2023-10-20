menu.onclick = () => {
  nav.classList.toggle("hide");
  getLogin.classList.toggle("hide");
  afterHide.classList.toggle("afterHide");
};

// start FAQ
let faq = document.querySelectorAll(".qustion");

faq.forEach((item) => {
  item.onclick = function () {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      faq.forEach((faq) => {
        faq.classList.remove("active");
      });
      item.classList.add("active");
    }
  };
});

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
// console.log(modal)
