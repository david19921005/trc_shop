window.onload = function () {
  let coverDom = ''

  const elementBarIcon = document.querySelector(".bar");
  const elementCartIcon = document.querySelector(".cart");
  const elementCover = document.querySelector(".cover");


  const elementRwdLis = document.querySelectorAll(".rwd-li-toggle");
  elementRwdLis.forEach((e) => {
    e.addEventListener("click", (event) => {
      const id = event.currentTarget.dataset.id;
      const targetDom = document.querySelector(
        ".rwd-ul-toggle[data-id='" + id + "']"
      );
      targetDom.classList.toggle("rwd-ul-toggle-enter");
      targetDom.classList.toggle("rwd-ul-toggle-leave");
    });
  });


  elementBarIcon.addEventListener("click", (event) => {
    coverDom = 'bars';
    elementCover.classList.toggle("hidden");
    const elementBarList = document.querySelector(".rwd-list");
    elementBarList.classList.toggle("rwd-list-leave");
  });

  elementCartIcon.addEventListener("click", (event) => {
    coverDom = 'carts';
    elementCover.classList.toggle("hidden");
    const elementCartList = document.querySelector(".cart-list");
    elementCartList.classList.toggle("cart-list-leave");
    elementCartList.classList.toggle("cart-list-enter");
  });

  elementCover.addEventListener("click", (event) => {
    console.log(coverDom === 'bars')
    elementCover.classList.toggle("hidden");
    if(coverDom === 'bars'){
      const elementBarList = document.querySelector(".rwd-list");
      elementBarList.classList.toggle("rwd-list-leave");
      coverDom = ''
    }else if(coverDom === 'carts'){
      const elementCartList = document.querySelector(".cart-list");
      elementCartList.classList.toggle("cart-list-leave");
      elementCartList.classList.toggle("cart-list-enter");
      coverDom = ''
    }
  });

  
};



// const toggleClass = document.querySelectorAll("[data-toggle-class]");
  // if (toggleClass) {
  //   for (let i = 0; i < toggleClass.length; i += 1) {
  //     const elem = toggleClass[i];
  //     elem.addEventListener("click", () => {
  //       const className = elem.getAttribute("data-toggle-class");
  //       const target = elem.getAttribute("data-target").slice(1);
  //       document.getElementById(target).classList.toggle(className);
  //     });
  //   }
  // }