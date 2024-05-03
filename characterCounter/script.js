const inputTxt = document.querySelector(".input-txt");
inputTxt.addEventListener(
  "input",
  () => (document.querySelector(".number").textContent = inputTxt.value.length)
);
