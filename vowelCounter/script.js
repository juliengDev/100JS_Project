const submitButton = document.querySelector(".form__btn");
const resultElement = document.querySelector(".result");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const value = document.querySelector(".form__txt").value;
  if (!value || typeof value !== "string") return;
  const result = normalize(value);

  const vowelNumber = checkVowelNumber(result);
  resultElement.textContent = `${value} has ${vowelNumber} vowels`;
});

const normalize = (word) => {
  if (!word) return;
  return word
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, "")
    .trim();
};
const checkVowelNumber = (word) => {
  const vowel = ["a", "e", "i", "o", "u"];

  let count = 0;
  [...word].forEach((el) => {
    if (vowel.includes(el)) count++;
  });

  return count.toString();
};
