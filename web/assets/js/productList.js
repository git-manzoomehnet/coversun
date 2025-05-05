function onAllImagesLoaded(container, callback) {
    const images = container.querySelectorAll('img');
    let loadedCount = 0;
    const total = images.length;
  
    if (total === 0) {
      callback();
      return;
    }
  
    function check() {
      loadedCount++;
      if (loadedCount === total) {
        callback();
      }
    }
  
    images.forEach(img => {
      // عکس‌هایی که قبلاً لود شدن
      if (img.complete) {
        check();
      } else {
        // چه موفق چه خطا، باید حساب بشن
        img.addEventListener('load', check);
        img.addEventListener('error', check);
      }
    });
  }
  
  onAllImagesLoaded(document, () => {
    console.log('همه تصاویر (حتی اونی که ارور داده) بررسی شدن.');

    const swiper = new Swiper('.swiper', {
      slidesPerView: "auto",
      speed: 1000,
      mousewheel: true,
      allowTouchMove: true,
      freeMode: true,

    
      on: {
   
      
      
        slideChange: function () {
          handleHeaderVisibility();
        },
        reachEnd: function () {
          handleHeaderVisibility();
        },
      },
    });
  
    document.querySelectorAll(".productSlide").forEach(element => {
      setTimeout(() => {
        element.classList.add("activeSlideEffect");
      }, 100);
    });
  });
  

// کد برای پنهان کردن هدر وقتی به فوتر می‌رسیم
function handleHeaderVisibility() {
  let slides = document.querySelectorAll(".swiper-slide")
  if (slides[slides.length-1].classList.contains("swiper-slide-next")) {
      document.querySelector("header").style.opacity="0"
    
  }
  // if (footerSection.classList.contains("swiper-slide-next")) {
  //   document.querySelector("header").style.opacity="0"
  // }
  else{
    document.querySelector("header").style.opacity="1"

  }
}
