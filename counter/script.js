const score = document.querySelector(".counter-txt");
const btnGroup = document.querySelector(".container-btn");
let count = +score.textContent;

btnGroup.addEventListener("click", function (e) {
  e.preventDefault();

  // Find the closest ancestor with the class "btn"
  const btn = e.target.closest(".btn");

  if (btn) {
    if (btn.classList.contains("btn-sub")) {
      count--;
      if (count < 0) {
        score.style.color = "orangered";
      }
      if (count === 0) {
        score.style.color = "white";
      }
      score.textContent = count;
    }

    if (btn.classList.contains("btn-res")) {
      count = 0;
      score.style.color = "white";
      score.textContent = count;
    }

    if (btn.classList.contains("btn-add")) {
      count++;
      if (count >= 1) {
        score.style.color = "yellow";
      }
      if (count === 0) {
        score.style.color = "white";
      }
      score.textContent = count;
    }
  }
});
