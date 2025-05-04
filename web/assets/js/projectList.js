setTimeout(() => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    speed: 1000,
    mousewheel: true,
    allowTouchMove: true,
    freeMode: true,

 
    on: {
      // slideNextTransitionStart: function(){
      //   const footerSection = document.querySelector('.footerSection');

      //   console.log(footerSection.classList.contains("swiper-slide-next"));
      // },
    
    
      slideChange: function () {
        handleHeaderVisibility();
      },
      reachEnd: function () {
        handleHeaderVisibility();
      },
    },
  });
}, 50);

let viduBox = document.querySelectorAll(".viduBox");

viduBox?.forEach(element => {
  element.addEventListener("mousemove", function () {
    element.querySelector("video")?.play();
  });

  element.addEventListener("mouseout", function () {
    element.querySelector("video")?.pause();
  });

  let titleProject = element.getAttribute("data-title");
  fetch(`/project-video.inc?title=${titleProject}`)
    .then(response => response.text())
    .then(videoElem => {
      console.log("videoElem", videoElem);
      const socialInfo = element.querySelector(".videoS");
      socialInfo.innerHTML = videoElem;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

// کد برای پنهان کردن هدر وقتی به فوتر می‌رسیم
function handleHeaderVisibility() {
  const footerSection = document.querySelector('.footerSection');
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
let loaderProject = document.querySelector(".loaderProject")
loaderProject.style.transform="translateX(100%)";
});