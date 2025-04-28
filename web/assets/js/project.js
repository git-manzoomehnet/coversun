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