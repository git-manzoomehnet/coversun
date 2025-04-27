let shareBtn = document.querySelector(".shareBtn")
let share = document.querySelector(".share")
share.addEventListener("mousemove" , function (params) {
    share.classList.add("activeShare")
})
share.addEventListener("mouseout" , function (params) {
    share.classList.remove("activeShare")
})


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


  const accordions = document.querySelectorAll(".accordion");

const openAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.add("accordion__active");
	content.style.maxHeight = content.scrollHeight+32 + "px";
};

const closeAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.remove("accordion__active");
	content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
	const intro = accordion.querySelector(".accordion__intro");
	const content = accordion.querySelector(".accordion__content");

	intro.onclick = () => {
		if (content.style.maxHeight) {
			closeAccordion(accordion);
		} else {
			accordions.forEach((accordion) => closeAccordion(accordion));
			openAccordion(accordion);
		}
	};
});