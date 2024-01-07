const hexValue = document.querySelector(".hex-value");
const btn = document.querySelector(".btn-res");

const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const rgbToHex = (r, g, b) =>
  "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");

const generateRandomBodyColor = function () {
  const r = randomNumber(0, 255);
  const g = randomNumber(0, 255);
  const b = randomNumber(0, 255);
  const hexColor = rgbToHex(r, g, b);
  hexValue.textContent = hexColor;
  document.body.style.backgroundColor = `${hexColor}`;
};

btn.addEventListener("click", generateRandomBodyColor);
