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
      let bactToLeft = document.querySelector(".bactToLeft")

      ScrollTrigger.scrollerProxy(pageContainer, {


        scrollTop(value) {
          if (scroller.scroll.instance.scroll.y > window.innerWidth) {
            bactToLeft.classList.remove("scale-0")
          }
          else {
            bactToLeft.classList.add("scale-0")

          }
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

            currentProgress = self.progress + prevScroll ? prevScroll : 0;
            prevScroll = currentProgress;

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
            prevScroll = progress

            scroller.scrollTo(0, totalOffset)

            prevScroll = progress;
            currentProgress = progress;

          }
        });
      });

      let itemsImgs = document.querySelectorAll(".itemsImgs img")
      let hoverItems = document.querySelectorAll(".hoverItems")
      let listNavItem = document.querySelectorAll(".navigation li")
      hoverItems.forEach((element, i) => {
        element.addEventListener("mouseover", function (params) {
        console.log("in");
        
        listNavItem.forEach((element2, i) => {
            element2.classList.add("opacity-0")
          })
          setTimeout(() => {
            
            element.classList.remove("opacity-0")
          }, 50);
          itemsImgs[i].classList.remove("opacity-0")
          itemsImgs[i].classList.add("z-1")
          
        })
        element.addEventListener("mouseleave", function (params) {
          console.log("leave");
          
          listNavItem.forEach((element2, i) => {
            element2.classList.remove("opacity-0")
          })
          itemsImgs[i].classList.remove("z-1")
          itemsImgs[i].classList.add("opacity-0")
        })
      });





      let darkLogoA = "/images/logo-dark.png"
      let darkLogoCover = "/images/coversun-logo-dark.png"
      let darkSec = document.querySelectorAll(".darkSec")
      let prevLog = document.querySelector("header .lSec img").getAttribute("src")
      let prevLogCover = document.querySelector("header .logo-landing img").getAttribute("src")

      darkSec.forEach(element => {
          gsap.from(element, {
              scrollTrigger: {
                  trigger: element,
                  start: 'right -5%',
                  end: 'left 20%',
                  containerAnimation: scrollTween,
                  onEnter: ()=>{
                    console.log("enter");
                    
                    
                    document.querySelector("header .lSec img").setAttribute("src" , prevLog)
                  },
                  onLeave: ()=>{
                    
                    console.log("leave");
                    
                    document.querySelector("header .lSec img").setAttribute("src" , darkLogoA)
                  },
                  onEnterBack: ()=>{
                    console.log("enterBack");
                    document.querySelector("header .lSec img").setAttribute("src" , prevLog)
                    
                    
                  },
                  onLeaveBack: ()=>{
                    
                    console.log("leaveBack");
                    
                    document.querySelector("header .lSec img").setAttribute("src" , darkLogoA)
                  },
              },
             



          })
          gsap.from(element, {
              scrollTrigger: {
                  trigger: element,
                  start: 'right 60%',
                  end: 'left 80%',
                  containerAnimation: scrollTween,
                  // markers:true,
                  onEnter: ()=>{
                    
                    document.querySelector("header").classList.remove("blackHeader")

                      
                    document.querySelector("header .logo-landing img").setAttribute("src" , prevLogCover)
                  },
                  
                  onLeave: ()=>{
                    
                    document.querySelector("header").classList.add("blackHeader")
                    document.querySelector("header .logo-landing img").setAttribute("src" , darkLogoCover)

                  },
                  onEnterBack: ()=>{
                    document.querySelector("header").classList.remove("blackHeader")
                    document.querySelector("header .logo-landing img").setAttribute("src" , prevLogCover)

                  },
                  onLeaveBack: ()=>{
                    document.querySelector("header").classList.add("blackHeader")
                    document.querySelector("header .logo-landing img").setAttribute("src" , darkLogoCover)


                  },
              },
             



          })
      });



      gsap.to("header", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".footerSection",
          containerAnimation: scrollTween,
          start: 'right 20%',
          end: 'left -1%',

          onEnter: ()=>{
            console.log("enter");
            document.querySelector("header").style.opacity="0"

          },
          onLeave: ()=>{
            document.querySelector("header").style.opacity="0"


          },
          onEnterBack: ()=>{
            console.log("enterBack");


          },
          onLeaveBack: ()=>{

            document.querySelector("header").style.opacity="1"

          },


        }
      });

      gsap.to(bactToLeft, {
        scrollTrigger: {
          trigger: ".footerSection",
          containerAnimation: scrollTween,
          start: 'right 0%',
          end: 'left 10%',
          onEnter: () => {
            console.log("enter");

            bactToLeft.style.scale = "0"
            console.log(bactToLeft);

          },
          onLeave: () => {


            console.log("leave");

          },
          onEnterBack: () => {
            console.log("enterBack");



          },
          onLeaveBack: () => {
            bactToLeft.style.scale = "1"
            console.log("leaveBack");
            console.log(bactToLeft);


          },


        }
      });


      bactToLeft.addEventListener("click", function (params) {
        scroller.scrollTo(0, 0)
      })



      let splPara = document.querySelectorAll(".scrollToTop")
      splPara.forEach(element => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'left left',
            end: 'left -40%',
            containerAnimation: scrollTween,
          },
          y: 30,
          opacity: 0,
          stagger: 0.1,
          delay: 0,
          duration: 1,



        })
      });
      let ImgScale = document.querySelectorAll(".ImgScale")
      ImgScale.forEach(element => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'left left',
            end: 'left -40%',
            containerAnimation: scrollTween,
          },
          scale: 1.25,
          opacity: 0,
          stagger: 0.1,
          delay: 0,
          duration: 1,



        })
      });



      let textAnim = document.querySelectorAll(".textAnim")
      textAnim.forEach(element => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: 'left -10%',
            end: 'left 150%',
            containerAnimation: scrollTween,
            scrub: true,
          },
          y: "-100vh",
          stagger: 0.1,
          delay: 0,
          duration: 1,



        })
      });


      let imgTrnlte = document.querySelectorAll(".imgTrnlte")
      imgTrnlte.forEach(element => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: 'left -10%',
            end: 'left 150%',
            containerAnimation: scrollTween,
            scrub: true,
          },
          x: "35%",
          stagger: 0.1,
          delay: 0,
          duration: 1,



        })
      });
      let imgTrnlteIn = document.querySelectorAll(".imgTrnlteIn")
      imgTrnlteIn.forEach(element => {
        // gsap.to(element, {
        //     scrollTrigger: {
        //         trigger: element,
        //         start: 'left -10%',
        //         end: 'left 150%',
        //         containerAnimation: scrollTween,
        //         scrub:true,
        //       },
        //       x: "35%",
        //     stagger: 0.1,
        //     delay: 0,
        //     duration: 1,



        // })


        gsap.fromTo(element,
          { x: "10%" }, // شروع: پایین
          {
            x: "-10%", // پایان: موقعیت اصلی
            scrollTrigger: {
              trigger: element,
              start: 'left -10%',
              end: 'left 150%',
              containerAnimation: scrollTween,
              scrub: true,
            },
            stagger: 0.1,
            delay: 0,
            duration: 1
          }
        );
      });

      const galleryPopSlider = new Swiper('.galleryPopSlider', {

        loop: true,

        speed: 1000,
        // Navigation arrows
        navigation: {
          nextEl: '.nextGallery',
          prevEl: '.prevGallery',
        },

      });

      let galleryPop = document.querySelector(".galleryPop")
      let galleryShowPop = document.querySelector(".galleryShowPop")
      let closeGallery = document.querySelector(".closeGallery")
      let zoomIn = document.querySelector(".zoomIn")
      let zoomOut = document.querySelector(".zoomOut")
      let rotateLeft = document.querySelector(".rotateLeft")
      let rotateRight = document.querySelector(".rotateRitght")
      let openPopGallery = document.querySelectorAll(".openPopGallery")

      let minZoom = 0.5
      let maxZoom = 1.5
      let currZoom = 1;
      let curRotate = 0;
      let closeGallerShowPop = document.querySelector(".closeGallerShowPop")
      let innerGallery = document.querySelector(".galleryPop .innerGallery")
      let galleryPopBoxes = document.querySelectorAll(".galleryPop .innerGallery .boxImg")
      galleryPopBoxes.forEach((element,i) => {
        element.addEventListener("click", function (params) {
          galleryShowPop.classList.remove("translate-y-[100vh]")
          innerGallery.classList.add("-translate-y-[100vh]")
          galleryPopSlider.slideTo(i,10)
        })
      });

      closeGallerShowPop.addEventListener("click", function (params) {
        galleryShowPop.classList.add("translate-y-[100vh]")
        innerGallery.classList.remove("-translate-y-[100vh]")
      })
      closeGallery.addEventListener("click", function (params) {
        galleryPop.classList.add("-top-[100vh]")

        galleryShowPop.classList.add("-translate-y-[100vh]")
      })
      openPopGallery.forEach(element => {
        element.addEventListener("click" , function (params) {
          galleryPop.classList.remove("-top-[100vh]")
          innerGallery.classList.remove("-translate-y-[100vh]")

        })
      });


      zoomIn.addEventListener("click", function (params) {
        let activeSlide = document.querySelector(".galleryPopSlider .swiper-slide-active img")
        if (currZoom < maxZoom) {
          currZoom += 0.1
          activeSlide.style.scale = currZoom
        }
      })
      zoomOut.addEventListener("click", function (params) {
        let activeSlide = document.querySelector(".galleryPopSlider .swiper-slide-active img")
        if (currZoom > minZoom) {
          currZoom -= 0.1
          activeSlide.style.scale = currZoom
        }
      })

      rotateLeft.addEventListener("click" , function (params) {
               let activeSlide = document.querySelector(".galleryPopSlider .swiper-slide-active img")

        curRotate+=90
        activeSlide.style.rotate = `${-curRotate}deg`
    })
    rotateRight.addEventListener("click" , function (params) {
               let activeSlide = document.querySelector(".galleryPopSlider .swiper-slide-active img")

        curRotate+=90
        activeSlide.style.rotate = `${curRotate}deg`
    })



    }, 500);
  });
});
