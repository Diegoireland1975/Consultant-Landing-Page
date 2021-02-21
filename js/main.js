// ##############
// Hamburger Menu
// ###############
const navToggler = document.getElementById("nav-toggler");
const navLinks = document.getElementById("nav-links");

navToggler.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  navToggler.classList.toggle("rotate");
});
// const panel = document.querySelectorAll(".question-card-header");
// const show = document.getElementsByClassName("question-card-body");

// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     show.classList.toggle("show");
//   });
// });

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible-expanded");
  })
);
// ##########
// LOAD MORE
// ##########

const loadmore = document.querySelector("#loadmore");
let currentItems = 2;
loadmore.addEventListener("click", (e) => {
  const elementList = [
    ...document.querySelectorAll(".question-card .question-card-header"),
  ];
  for (let i = currentItems; i < currentItems + 2; i++) {
    if (elementList[i]) {
      elementList[i].style.display = "block";
    }
  }
  currentItems += 2;

  // Load more button will be hidden after list fully loaded
  if (currentItems >= elementList.length) {
    event.target.style.display = "none";
  }
});
