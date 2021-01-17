const panel = document.querySelectorAll(".question-card-header");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    panel.classList.toggle("show");
  });
});
