const score = document.querySelector(".counter-txt");
const btnGrp = document.querySelector(".container-btn");

btnGrp.addEventListener("click", function (e) {
  e.preventDefault();
  const btn = e.target.closest(".btn");

  if (btn) {
    if (btn.classList.contains("btn-res")) {
      const randomNumber = generateRandomNumber(0, 1000);
      score.innerHTML = randomNumber;
    }
  }
});

const generateRandomNumber = function (min, max) {
  if (
    typeof min !== "number" ||
    typeof max !== "number" ||
    isNaN(min) ||
    isNaN(max)
  ) {
    throw new Error("Les paramètres doivent être des nombres valides.");
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
