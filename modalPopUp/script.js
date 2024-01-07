const btnOpenModal = document.querySelector(".btn-popup");
const btnCloseModal = document.querySelector(".modal__close-icon");
const modal = document.querySelector(".modal");

[btnOpenModal, btnCloseModal].forEach((el) => {
  el.addEventListener("click", function () {
    modal.classList.toggle("modal--popup");
  });
});
