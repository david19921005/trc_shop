window.onload = function () {
  const elementRwdLis = document.querySelectorAll(".rwd-li-toggle");
  elementRwdLis.forEach((e) => {
    e.addEventListener("click", (event) => {
      const id = event.currentTarget.dataset.id;
      const targetDom = document.querySelector(
        ".rwd-ul-toggle[data-id='" + id + "']"
      );
      targetDom.classList.toggle("rwd-ul-toggle-leave");
      targetDom.classList.toggle("rwd-ul-toggle-enter");
    });
  });
};
const coverToggle = () => {
  const elementBarIcon = document.querySelector(".rwd-list");
  const elementCover = document.querySelector(".cover");
  elementCover.classList.toggle("hidden");
  elementBarIcon.classList.toggle("rwd-list-leave");
};
