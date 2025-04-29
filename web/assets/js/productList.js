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
    let breadcrumb = document.querySelector('.breadCrumb');

    const swiper = new Swiper('.swiper', {
      slidesPerView: "auto",
      speed: 1000,
      mousewheel: true,
      allowTouchMove: true,
      freeMode: true,

      on: {
        setTranslate(translate) {
          // مقدار translate معمولا منفی میشه وقتی اسلایدر حرکت می‌کنه
          console.log(translate);
          
          if (translate !== 0) {
            breadcrumb.classList.add('hide-breadcrumb');
          } else {
            breadcrumb.classList.remove('hide-breadcrumb');
          }
        }

    },

    });
  
    document.querySelectorAll(".productSlide").forEach(element => {
      setTimeout(() => {
        element.classList.add("activeSlideEffect");
      }, 100);
    });
  });
  

