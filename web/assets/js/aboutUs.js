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

$(".containerHorizontal").imagesLoaded({

}, function () {
    $(document).ready(function () {

    setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger);

      const pageContainer = document.querySelector('.containerHorizontal');

      const scroller = new LocomotiveScroll({
        el: pageContainer,
        smooth: true,
        direction: 'vertical', // اسکرول افقی با GSAP هست، نه Locomotive
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

      let pinWrap = document.querySelector('.Pin-Wrapp');
      let scrollLength = pinWrap.scrollWidth - window.innerWidth;

     let scrollTween =  gsap.to(pinWrap, {
        x: scrollLength, // حرکت از راست به چپ
        ease: 'none',
        scrollTrigger: {
          trigger: '#PinSection',
          scroller: pageContainer,
          start: 'top top',
          end: () => `+=${scrollLength}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      });

      ScrollTrigger.refresh();


      // Custom js





      let splPara = document.querySelectorAll(".scrollToTop")
      splPara.forEach(element => {
          gsap.from(element, {
              scrollTrigger: {
                  trigger: element,
                  start: 'left 20%',
                  end: 'left -10%',
                  containerAnimation: scrollTween,
              },
              y: 30,
              opacity: 0,
              stagger: 0.1,
              delay: 0,
              duration: 0.5,



          })
      });

      let numberEff = document.querySelectorAll(".numberEff")
      numberEff.forEach(element => {
          gsap.from(element, {
              scrollTrigger: {
                  trigger: element,
                  start: 'left 20%',
                  end: 'left -10%',
                  containerAnimation: scrollTween,
              },
              y: 50,
           
              stagger: 0.1,
              delay: 0,
              duration: 0.5,



          })
      });
      let activeImg = document.querySelectorAll(".activeImg")
      activeImg.forEach(element => {
          gsap.from(element, {
              scrollTrigger: {
                  trigger: element,
                  start: 'left 10%',
                  end: 'left -10%',
                  containerAnimation: scrollTween,
                  onEnter: ()=>{
                    element.classList.add("activeFirs")
                    
                  },
              },
             



          })
          gsap.from(element, {
              scrollTrigger: {
                  trigger: element,
                  start: 'left 30%',
                  end: 'left -10%',
                  containerAnimation: scrollTween,
                  onEnter: ()=>{
                    element.classList.add("activeSec")
                    
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
                    
                    console.log( document.querySelector("header .lSec img"));
                    
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
                  start: 'right 50%',
                  end: 'left 80%',
                  containerAnimation: scrollTween,
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




    }, 500);
})

})