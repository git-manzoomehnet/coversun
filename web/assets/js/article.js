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


 

  const textareas = document.querySelectorAll("textarea");
  textareas.forEach(element => {
	  if (element.value.trim() === "") {
		element.value = "";
	  }
	
  });
// اگر مقدارش خالی نیست، و فقط فاصله یا اینتر هست، پاکش کن
let messageSend = document.querySelector(".messageSend")
let commentP = document.querySelector(".commentP")

function renderCommentFn(args) {
console.log(args);

}
let submitComment =document.querySelector('.submitComment')
submitComment.addEventListener('click', (event) => {
//  let input1  = document.querySelector('.namee')
event.preventDefault();
let inputs = document.querySelectorAll('.commentP input')
let textas = document.querySelectorAll('.commentP textarea')
let emptyFlag = false;
// let loaderBtn = document.querySelector(".loaderBtn")
// loaderBtn.style.display="block"
// submitComment.querySelector("span").style.display="none"
// submitComment.style.background="#00A752"
inputs.forEach(element => {
	
	if (element.value == "") {
		if (element.classList.contains("codeinputm")) {
			
			emptyFlag = true;
		//    element.setAttribute("placeholder" , "لطفا کد امنیتی را وارد نمایید")
		   element.parentElement.classList.add("emptyInput")
		//    console.log(element.parentElement);
		   
		}
		else{
			
			emptyFlag = true;
			// element.setAttribute("placeholder" , "لطفا این فیلد را پر نمایید")
			element.classList.add("emptyInput")
		}
		
	}
});
textas.forEach(element => {
	
	console.log(element.value.trim() === "");
	if (element.value.trim() === "") {
		
			
			emptyFlag = true;
			// element.setAttribute("placeholder" , "لطفا این فیلد را پر نمایید")
			element.classList.add("emptyInput")
		
		
	}
});
if (!emptyFlag) {
	let val = document.querySelector(".commentP textarea").value;
	let userName = document.querySelector(".commentP .userName").value;
	console.log("val", val);
	$bc.setSource('db.send', true)
	$bc.setSource('db.senduserName', userName)
	$bc.setSource('db.sendcomment', val)
	$bc.setSource('db.run', true)
	let sendbox = document.querySelector('.messageSend')
	let text = sendbox.querySelector('p')
	text.innerHTML = 'پیام شما با موفقیت ثبت گردید.'
	text.style.color="#00A752"
	commentP.reset()
	messageSend.style.display = "block"
	document.querySelector(".commentP").reset();
	setTimeout(() => {
		messageSend.style.display = "none"
		// loaderBtn.style.display="none"
		// submitComment.querySelector("span").style.display="block"

	}, 5000)
}
else {
	let sendbox = document.querySelector('.messageSend')
	let text = sendbox.querySelector('p')
	text.innerHTML = 'فیلدهای الزامی را پر کنید'
	messageSend.style.display = "block"
	
	setTimeout(() => {
		messageSend.style.display = "none"
		// loaderBtn.style.display="none"
		// submitComment.querySelector("span").style.display="block"
	}, 5000)

}

setTimeout(() => {
	inputs.forEach(element => {
		if (element.classList.contains("codeinputm")) {
			element.classList.remove("emptyInput")
			// element.setAttribute("placeholder","کد امنیتی را وارد نمایید")
			element.parentElement.classList.remove("emptyInput")
			submitComment.style.background="transparent"

		}
		else{


			element.classList.remove("emptyInput")
			// element.setAttribute("placeholder","")
			element.parentElement.classList.remove("emptyInput")
			submitComment.style.background="transparent"
		}
		
	})
	textas.forEach(element => {

		element.classList.remove("emptyInput")
		// element.setAttribute("placeholder","")
		submitComment.style.background="transparent"
		
	})
}, 5000);


})





const commentListSlider = new Swiper('.commentListSlider', {

loop: true,

// Navigation arrows
navigation: {
	nextEl: '.nextComment',
	prevEl: '.prevComment',
},

});

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