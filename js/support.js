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

/////////////////////////////////////////
// ///form
/////////////////////////////////////////

let inputs = document.querySelectorAll(" form#contact  .inputs");

function check() {
  if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "") {
    btnSubmit.setAttribute("disabled","true");
  } else {
    // console.log(" note vide");
    btnSubmit.removeAttribute("disabled");
  }
}
// check()

// addEventListener
inputs.forEach((item) => {
  item.addEventListener("input", check);
});
