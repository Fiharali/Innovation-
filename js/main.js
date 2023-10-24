menu.onclick = () => {
  nav.classList.toggle("hide");
  getLogin.classList.toggle("hide");
  afterHide.classList.toggle("afterHide");
};

let items = document.querySelectorAll("#nav > ul > li");
// console.log(items)
items.forEach((item) => {
  item.onclick = () => {
    items.forEach((navItem) => {
      navItem.classList.remove("navStyle");
    });
    item.classList.add("navStyle");
  };
});
