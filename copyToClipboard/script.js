const btn = document.querySelector(".coupon__input__btn");

const toClipboard = function (e) {
  // Get the text field
  const input = document.querySelector(".coupon__input__txt");

  // Select the text field
  input.select();
  input.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(input.value);

  // Log the copied text
  console.log("Copied the text: " + input.value);
};

const validationButton = () => {
  const inputTxt = document.querySelector(".coupon__input__txt");
  inputTxt.value = "";
  btn.textContent = "Copied...";
  setTimeout(() => {
    btn.textContent = "Copy";
  }, 3000);
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  toClipboard();
  validationButton();
});
