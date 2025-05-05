const gallerySlider = new Swiper('.gallerySlider', {
    speed:1000,
    spaceBetween:35,
    slidesPerView:"auto",
   });
 
 const relatedBlog = new Swiper('.relatedBlog', {
    speed:1000,
    spaceBetween:116,
    slidesPerView:"auto",
   });
 const relatedProduct = new Swiper('.relatedProduct', {
    speed:1000,
    spaceBetween:99.73,
    slidesPerView:"auto",
   });

   

   document.querySelector(".scrollBtmBtn").addEventListener("click" , function (params) {
    document.querySelector(".dessc").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

   })


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



   let boxes = document.querySelectorAll(".gallerySlider .swiper-slide")
   boxes.forEach(element => {
    element.addEventListener("mouseenter", function (params) {
        document.querySelector(".cursor").classList.add("activeCursor")

    })

    element.addEventListener("mouseleave", function (params) {
      document.querySelector(".cursor").classList.remove("activeCursor")

    })
  })