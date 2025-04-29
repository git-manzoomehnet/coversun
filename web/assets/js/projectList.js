
setTimeout(() => {
  
  const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    speed:1000,
    mousewheel:true,
    allowTouchMove:true,
    freeMode:true,
  });
  
},50);
  
let viduBox = document.querySelectorAll(".viduBox")

viduBox?.forEach(element => {
    element.addEventListener("mousemove" , function (params) {
        
        element.querySelector("video")?.play();
    })
    element.addEventListener("mouseout" , function (params) {
        element.querySelector("video")?.pause();
    })
let titleProject = element.getAttribute("data-title")
    fetch(`/project-video.inc?title=${titleProject}`)
    .then(response => response.text())

    .then(videoElem => {
      console.log("videoElem",videoElem);

      const socialInfo = element.querySelector(".videoS")
      socialInfo.innerHTML=videoElem
    })
    .catch(error => {
      console.error('Error:', error);
    });
});