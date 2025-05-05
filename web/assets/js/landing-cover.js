// function onAllImagesLoaded(container, callback) {
//   const images = container.querySelectorAll('img');
//   let loadedCount = 0;
//   const total = images.length;

//   if (total === 0) {
//     callback();
//     return;
//   }

//   function check() {
//     loadedCount++;
//     if (loadedCount === total) {
//       callback();
//     }
//   }

//   images.forEach(img => {
//     // عکس‌هایی که قبلاً لود شدن
//     if (img.complete) {
//       check();
//     } else {
//       // چه موفق چه خطا، باید حساب بشن
//       img.addEventListener('load', check);
//       img.addEventListener('error', check);
//     }
//   });
// }


// onAllImagesLoaded(document, () => {
//   console.log('همه تصاویر (حتی اونی که ارور داده) بررسی شدن.');

//   document.addEventListener('DOMContentLoaded', function () {
//     setTimeout(() => {
//       gsap.registerPlugin(ScrollTrigger);

//       const pageContainer = document.querySelector('.containerHorizontal');

//       const scroller = new LocomotiveScroll({
//         el: pageContainer,
//         smooth: true,
//         direction: 'vertical', // اسکرول افقی با GSAP هست، نه Locomotive
//       });

//       scroller.on('scroll', ScrollTrigger.update);

//       ScrollTrigger.scrollerProxy(pageContainer, {
//         scrollTop(value) {
//           return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//           return {
//             top: 0,
//             left: 0,
//             width: window.innerWidth,
//             height: window.innerHeight
//           };
//         },
//         pinType: pageContainer.style.transform ? 'transform' : 'fixed'
//       });

//       ScrollTrigger.addEventListener('refresh', () => scroller.update());

//       let pinWrap = document.querySelector('.Pin-Wrapp');
//       let scrollLength = pinWrap.scrollWidth - window.innerWidth;

//      let scrollTween =  gsap.to(pinWrap, {
//         x: scrollLength, // حرکت از راست به چپ
//         ease: 'none',
//         scrollTrigger: {
//           trigger: '#PinSection',
//           scroller: pageContainer,
//           start: 'top top',
//           end: () => `+=${scrollLength}`,
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//         }
//       });

//       ScrollTrigger.refresh();


//       // Custom js

//       let catLists = document.querySelector(".catLists")
//       let catImgs = document.querySelectorAll(".bgImg img")
//       catLists.querySelectorAll("li").forEach((element, i) => {
//         element.addEventListener("mouseenter", function (params) {
//           element.querySelector(".listSvg").classList.add("draw");
//           catLists.style.width = "408px";
//           element.querySelector(".title").classList.remove("hidden")
//           catImgs[i].classList.remove("opacity-0")
//           setTimeout(() => {
//             element.querySelector(".title").classList.remove("opacity-0")

//           }, 100);
//         })
//         element.addEventListener("mouseleave", function (params) {
//           console.log("out");
//           element.querySelector(".listSvg").classList.remove("draw");

//           catLists.style.width = "255px";
//           catImgs[i].classList.add("opacity-0")
//           element.querySelector(".title").classList.add("opacity-0")
//           setTimeout(() => {
//             element.querySelector(".title").classList.add("hidden")

//           }, 200);
//         })
//       });




//       // let viduBox = document.querySelectorAll(".viduBox");

//       // viduBox?.forEach(element => {
//       //   element.addEventListener("mousemove", function () {
//       //     element.querySelector("video")?.play();
//       //   });

//       //   element.addEventListener("mouseout", function () {
//       //     element.querySelector("video")?.pause();
//       //   });

//       //   let titleProject = element.getAttribute("data-title");
//       //   fetch(`/project-video.inc?title=${titleProject}`)
//       //     .then(response => response.text())
//       //     .then(videoElem => {
//       //       console.log("videoElem", videoElem);
//       //       const socialInfo = element.querySelector(".videoS");
//       //       socialInfo.innerHTML = videoElem;
//       //     })
//       //     .catch(error => {
//       //       console.error('Error:', error);
//       //     });
//       // });






//       let splPara = document.querySelectorAll(".scrollToTop")
//       splPara.forEach(element => {
//           gsap.from(element, {
//               scrollTrigger: {
//                   trigger: element,
//                   start: 'left left',
//                   end: 'left -40%',
//                   containerAnimation: scrollTween,
//               },
//               y: 30,
//               opacity: 0,
//               stagger: 0.1,
//               delay: 0,
//               duration: 1,



//           })
//       });




//     }, 500);
//   });
// })

$(".containerHorizontal").imagesLoaded({}, function () {
  $(document).ready(function () {
    setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger);

      const pageContainer = document.querySelector('.containerHorizontal');
      const pinWrap = document.querySelector('.Pin-Wrapp');
      const sections = document.querySelectorAll('.Pin-Wrapp > section');
      const scrollLength = pinWrap.scrollWidth - window.innerWidth;

      // ذخیره موقعیت‌های section ها
      const sectionPositions = [];
      sections.forEach((section, index) => {
        sectionPositions.push({
          id: section.id,
          position: section.offsetLeft,
          progress: section.offsetLeft / scrollLength
        });
      });

      // تنظیمات LocomotiveScroll برای اسکرول عمودی
      const scroller = new LocomotiveScroll({
        el: pageContainer,
        smooth: true,
        direction: 'vertical', // اسکرول عمودی
      });

      scroller.on('scroll', ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(pageContainer, {
        scrollTop(value) {
          return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
        pinType: pageContainer.style.transform ? 'transform' : 'fixed'
      });

      ScrollTrigger.addEventListener('refresh', () => scroller.update());
let currentProgress;
let prevScroll;
      // ایجاد اسکرول افقی
      let scrollTween = gsap.to(pinWrap, {
        x: scrollLength,
        ease: 'none',
        scrollTrigger: {
          trigger: '#PinSection',
          scroller: pageContainer, // استفاده از اسکرول عمودی برای افقی
          start: 'top top',
          end: () => `+=${scrollLength}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: self => {
            console.log(prevScroll);
            
             currentProgress = self.progress + prevScroll?prevScroll : 0;
            prevScroll = currentProgress;
            console.log("currentProgress" , currentProgress);
            
            // به روزرسانی وضعیت فعال navigation
            updateActiveNav(currentProgress);
          }
        }
      });

      // تابع برای به روزرسانی navigation فعال
      function updateActiveNav(currentProgress) {
        let activeSection = null;
        sectionPositions.forEach((section, index) => {
          if (currentProgress >= section.progress - 0.1) {
            activeSection = section.id;

          }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === activeSection) {
            link.classList.add('active');
          }
        });
      }

      // کلیک نویگیشن
      document.querySelectorAll('.navigation li[data-target]').forEach(navItem => {
        navItem.addEventListener('click', function (e) {
          e.preventDefault();

          const targetSelector = this.getAttribute('data-target');
          const targetEl = document.querySelector(`.${targetSelector}`);

          if (targetEl) {
            const targetIndex = Array.from(sections).indexOf(targetEl);
            let totalOffset = 0;

            for (let i = 0; i < targetIndex; i++) {
              totalOffset += sections[i].offsetWidth;

            }

            const progress = totalOffset / scrollLength;
            prevScroll = prevScroll+progress
    
            console.log("progress" , progress);
            
            // فقط کنترل progress خود scrollTween
            gsap.to(scrollTween, {
              progress: progress,
              duration: 1.2,
              ease: "power2.out",
              onUpdate: () => {
                scroller.update();
              },
              onComplete: () => {
                scroller.update();
              }
            });
          }
        });
      });



    }, 500);
  });
});
