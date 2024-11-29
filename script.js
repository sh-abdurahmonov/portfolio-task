// Находим все кнопки с классом "header__link"
const buttons = document.querySelectorAll(".header__link");

// Добавляем обработчик клика на каждую кнопку
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Убираем активный класс со всех кнопок
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Добавляем активный класс на нажатую кнопку
    button.classList.add("active");
  });
});
document.querySelector(".theme-btn").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
