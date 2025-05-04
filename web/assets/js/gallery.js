const swiper = new Swiper('.swiper', {
  centeredSlides: true,
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  speed: 1000,
  mousewheel: true,

  on: {
    slideChangeTransitionStart: function () {
      const current = document.querySelector('[data-title-current]');
      const next = document.querySelector('[data-title-next]');
      const counterContainer = document.querySelector('.counter-container');

      // دریافت data-title از اسلاید فعال
      const activeSlide = this.slides[this.activeIndex];
      const newTitle = activeSlide.getAttribute('data-title');
      if (!newTitle) return;

      // مقدار جدید رو وارد next
      next.textContent = newTitle;
      counterContainer.style.transform="translateY(-100%)"
      counterContainer.classList.add("duration-500")

    },

    slideChangeTransitionEnd: function () {
      const current = document.querySelector('[data-title-current]');
      const next = document.querySelector('[data-title-next]');
      const counterContainer = document.querySelector('.counter-container');

      // بعد از پایان انیمیشن، مقادیر رو به روز می‌کنیم
      current.textContent = next.textContent;

      // حذف transition و اعمال تغییرات
      counterContainer.classList.remove("duration-500")
      counterContainer.style.transform="translateY(0%)"
    }
  }
});



var cursor = $(".cursor");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

    

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

let slides = document.querySelectorAll(".swiper-slide")
slides.forEach(element => {
  element.addEventListener("mouseenter", function (params) {
      document.querySelector(".cursor").classList.add("activeCursor")
  })

  element.addEventListener("mouseleave", function (params) {
    document.querySelector(".cursor").classList.remove("activeCursor")

  })
})