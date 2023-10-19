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


