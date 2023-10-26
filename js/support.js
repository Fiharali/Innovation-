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
let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
let inputMsg = document.querySelector("#message");

let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let regexString = /^([A-z\ ?]{5,20})$/;

function check() {
  if (
    !inputName.value.match(regexString) ||
    !inputEmail.value.match(regexEmail) ||
    inputMsg.value.trim().length < 10
  ) {
    btnSubmit.setAttribute("disabled", "true");
  } else {
    // console.log(" note vide");
    btnSubmit.removeAttribute("disabled");
  }
}
inputs.forEach((item) => {
  item.addEventListener("input", check);
});

inputName.addEventListener("input", function () {
  if (!inputName.value.match(regexString)) {
    inputName.classList.add("error");
  } else {
    inputName.classList.remove("error");
  }
});

inputEmail.addEventListener("input", function () {
  if (!inputEmail.value.match(regexEmail)) {
    inputEmail.classList.add("error");
  } else {
    inputEmail.classList.remove("error");
  }
});

inputMsg.addEventListener("input", function () {
  if (inputMsg.value.trim().length < 10) {
    inputMsg.classList.add("error");
  } else {
    inputMsg.classList.remove("error");
  }
});
