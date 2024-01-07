const btn = document.querySelector(".form__btn");
const result = document.querySelector(".result");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputTxt = document.querySelector(".form__txt").value;
  result.textContent = checkIsPalindrome(inputTxt);
});

const createBackward = (word) => word.split("").reverse().join("");

const checkIsPalindrome = (word) => {
  if (!word || typeof word !== "string") return;
  const result = word
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, "")
    .trim();

  const backwardStr = createBackward(result);

  return result === backwardStr
    ? `${result} is a palindrome ✅`
    : `${result} is not palindrome 🚫`;
};
