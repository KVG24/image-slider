function dropDown(eventTarget, hiddenElement) {
  eventTarget.addEventListener("click", () => {
    if (hiddenElement.classList.contains("hidden")) {
      hiddenElement.classList.remove("hidden");
    } else {
      hiddenElement.classList.add("hidden");
    }
  });
}

const slider = (() => {
  let px = 0;
  let autoplay = false;
  let slideshowInterval;
  const imgContainer = document.querySelector(".img-container");
  const dots = document.querySelectorAll(".dot");

  const nextSlide = () => {
    if (imgContainer.style.transform === "translateX(-9000px)") {
      px += 9000;
    } else {
      px -= 1000;
    }
    imgContainer.style.transform = `translateX(${px}px)`;
    dots.forEach(dot => {
      dot.classList.remove('current')
      if (dot.dataset.px == px) {
        dot.classList.add('current')
      }
    });
  };

  const previousSlide = () => {
    if (imgContainer.style.transform === "translateX(0px)") {
      px -= 9000;
    } else {
      px += 1000;
    }
    imgContainer.style.transform = `translateX(${px}px)`;
    dots.forEach(dot => {
      dot.classList.remove('current')
      if (dot.dataset.px == px) {
        dot.classList.add('current')
      }
    });
  };

  const slideShow = () => {
    if (!autoplay) {
      autoplay = true;
      slideshowInterval = setInterval(nextSlide, 3000);
    } else {
      autoplay = false;
      clearInterval(slideshowInterval);
      slideshowInterval = null;
    }
  };

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
      imgContainer.style.transform = `translateX(-${i}000px)`;
      px = i * -1000;
      for (let j = 0; j < dots.length; j++) {
        dots[j].classList.remove("current");
      }
      dots[i].classList.add("current");
    });
  }

  return { nextSlide, previousSlide, slideShow };
})();

export { slider, dropDown };
