const panel = document.querySelectorAll(".question-card-header");
const show = document.getElementsByClassName("question-card-body");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    show.classList.toggle("show");
  });
});
