const buttons = document.querySelectorAll(".header__link");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");
  });
});
// dark and light mode
document.querySelector(".theme-btn").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
