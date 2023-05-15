window.onload = function () {
  let coverDom = "";

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
      event.currentTarget.parentNode.classList.toggle("arrow-turn");
    });
  });
  
  const catalogIcon = document.querySelectorAll(".catalog-i");
  catalogIcon.forEach((e) => {
    e.addEventListener("click", (event) => {
      // console.log(event.currentTarget)
      const ulElement = event.currentTarget.parentNode.nextElementSibling;
      ulElement.classList.toggle("rwd-ul-toggle-enter");
      ulElement.classList.toggle("rwd-ul-toggle-leave");
      event.currentTarget.classList.toggle("arrow-turn");
    });
  });

  elementBarIcon.addEventListener("click", (event) => {
    coverDom = "bars";
    elementCover.classList.toggle("hidden");
    const elementBarList = document.querySelector(".rwd-list");
    elementBarList.classList.toggle("rwd-list-leave");
  });

  elementCartIcon.addEventListener("click", (event) => {
    coverDom = "carts";
    elementCover.classList.toggle("hidden");
    const elementCartList = document.querySelector(".cart-list");
    elementCartList.classList.toggle("cart-list-leave");
    elementCartList.classList.toggle("cart-list-enter");
  });

  elementCover.addEventListener("click", (event) => {
    elementCover.classList.toggle("hidden");
    if (coverDom === "bars") {
      const elementBarList = document.querySelector(".rwd-list");
      elementBarList.classList.toggle("rwd-list-leave");
      coverDom = "";
    } else if (coverDom === "carts") {
      const elementCartList = document.querySelector(".cart-list");
      elementCartList.classList.toggle("cart-list-leave");
      elementCartList.classList.toggle("cart-list-enter");
      coverDom = "";
    }
  });


  // const marqueeContent = document.querySelector(".marquee-content");
  // let marqueePosition = window.innerWidth; // 從右邊開始進入畫面
  // const marqueeSpeed = 2; // 跑馬燈滾動速度
  // let marqueeTimer; // 定時器

  // // 設定跑馬燈寬度
  // function setMarqueeWidth() {
  //   const marqueeWidth = marqueeContent.offsetWidth + 20; // 加上一些額外的空間
  //   marqueeContent.style.width = marqueeWidth + "px";
  // }

  // window.addEventListener("resize", function () {
  //   clearTimeout(marqueeTimer); // 暫停定時器
  //   setMarqueeWidth(); // 重新設定寬度
  //   marqueeTimer = setTimeout(moveMarquee, 500); // 500ms後重新開始滾動
  // });

  // setMarqueeWidth(); // 初始設定寬度
  // moveMarquee(); // 開始滾動

  // // 跑馬燈滾動效果
  // function moveMarquee() {
  //   marqueePosition -= marqueeSpeed;
  //   marqueeContent.style.left = marqueePosition + "px";
  //   if (marqueePosition < -marqueeContent.offsetWidth) {
  //     marqueePosition = window.innerWidth; // 從右邊重新進入畫面
  //   }
  //   marqueeTimer = setTimeout(moveMarquee, 30); // 每 30ms 滾動跑馬燈
  // }
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
