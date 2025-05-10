const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', function () {
        const body = this.nextElementSibling;

        if (body.style.maxHeight) {
            body.style.maxHeight = null;
            this.querySelector('.icon').innerHTML = '<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.1603 10.6221H11.8397V0.877863C11.8397 0.351145 11.5038 0 11 0C10.4962 0 10.1603 0.351145 10.1603 0.877863V10.6221H0.839695C0.335878 10.6221 0 10.9733 0 11.5C0 12.0267 0.335878 12.3779 0.839695 12.3779H10.1603V22.1221C10.1603 22.6489 10.4962 23 11 23C11.5038 23 11.8397 22.6489 11.8397 22.1221V12.3779H21.1603C21.6641 12.3779 22 12.0267 22 11.5C22 10.9733 21.6641 10.6221 21.1603 10.6221Z" fill="black"/></svg>';
        } else {
            document.querySelectorAll('.accordion-body').forEach(b => {
                b.style.maxHeight = null;
            });
            document.querySelectorAll('.icon').forEach(icon => {
                icon.innerHTML = '<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.1603 10.6221H11.8397V0.877863C11.8397 0.351145 11.5038 0 11 0C10.4962 0 10.1603 0.351145 10.1603 0.877863V10.6221H0.839695C0.335878 10.6221 0 10.9733 0 11.5C0 12.0267 0.335878 12.3779 0.839695 12.3779H10.1603V22.1221C10.1603 22.6489 10.4962 23 11 23C11.5038 23 11.8397 22.6489 11.8397 22.1221V12.3779H21.1603C21.6641 12.3779 22 12.0267 22 11.5C22 10.9733 21.6641 10.6221 21.1603 10.6221Z" fill="black"/></svg>';
            });

            body.style.maxHeight = body.scrollHeight + 'px';
            this.querySelector('.icon').innerHTML = '<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5634 0.694874L8.97276 7.28554L2.08251 0.395299C1.71007 0.0228529 1.22427 0.0120564 0.868019 0.368309C0.511767 0.724561 0.522562 1.21036 0.895008 1.58281L7.78525 8.47305L1.19458 15.0637C0.838332 15.42 0.849127 15.9058 1.22157 16.2782C1.59402 16.6507 2.07982 16.6615 2.43607 16.3052L9.02674 9.71453L15.917 16.6048C16.2894 16.9772 16.7752 16.988 17.1315 16.6318C17.4877 16.2755 17.4769 15.7897 17.1045 15.4173L10.2142 8.52703L16.8049 1.93636C17.1612 1.58011 17.1504 1.09431 16.7779 0.721865C16.4055 0.349419 15.9197 0.338622 15.5634 0.694874Z" fill="black"/></svg>';
        }
    });
});

let activeTextbox = null;

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        if (activeTextbox) {
            activeTextbox.classList.remove('activeTextshow');
        }
        const textbox = box.querySelector('.textboxshow');

        if (textbox) {
            textbox.classList.add('activeTextshow');
            activeTextbox = textbox;
        }
        document.querySelectorAll('.box').forEach(b => {
            b.classList.replace('h-[75px]', 'h-[31px]');
            b.querySelector('img').classList.replace('opacity-100', 'opacity-0');
        });

        if (!box.classList.contains('h-[75px]')) {
            box.classList.replace('h-[31px]', 'h-[75px]');
            box.querySelector('img').classList.replace('opacity-0', 'opacity-100');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const marquee = document.querySelector('.marqueepy');
    const content = marquee.innerHTML;
    function checkWidth() {
        const wrapper = document.querySelector('.marquee-wrapperText');
        const marqueeWidth = marquee.offsetWidth;
        const wrapperWidth = wrapper.offsetWidth;
        if (marqueeWidth < wrapperWidth * 3) {
            marquee.innerHTML = content + content;
        }
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);
    // ###############
    const buttons = document.querySelectorAll('.scroll-btnG');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetSelector = btn.getAttribute('data-target');
            const target = document.querySelector(targetSelector);

            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
const galleryPopSlider = new Swiper('.galleryPopSlider', {
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: '.nextGallery',
        prevEl: '.prevGallery',
    }
});

let galleryPop = document.querySelector(".galleryPop");
let galleryShowPop = document.querySelector(".galleryShowPop");
let closeGallery = document.querySelector(".closeGallery");
let zoomIn = document.querySelector(".zoomIn");
let zoomOut = document.querySelector(".zoomOut");
let rotateLeft = document.querySelector(".rotateLeft");
let rotateRight = document.querySelector(".rotateRitght");
let openPopGallery = document.querySelectorAll(".openPopGallery");
let showItemList = document.querySelector("#showItemList")
let showImgItem = document.querySelector("#showImgItem")
let closepopupItem = document.querySelector("#closepopupItem")
let closepopupgallry = document.querySelector("#closepopupgallry")
let showPopupGallry = document.querySelector("#showPopupGallry")


let minZoom = 0.5;
    let maxZoom = 1.5;
    let currZoom = 1;
    let curRotate = 0;
    let closeGallerShowPop = document.querySelector(".closeGallerShowPop");
    let innerGallery = document.querySelector(".galleryPop .innerGallery");
    let galleryPopBoxes = document.querySelectorAll(".boxImg");
    console.log(galleryPopBoxes);
    galleryPopBoxes.forEach((element, i) => {
        console.log(i);
        element.addEventListener("click", function () {
            closepopupItem.setAttribute("opengallery", "")
            // showItemList.style.display = "none"
            console.log(i);
            galleryPopSlider.slideToLoop(i, 10);
            setTimeout(() => {
                showImgItem.classList.remove("invisible")
                showImgItem.style.opacity = "1"
            }, 50);

        });
    });
    zoomIn.addEventListener("click", () => {
        let activeSlide = document.querySelector(".galleryPopSlider .swiper-slide-active img");
        if (currZoom < maxZoom) {
            currZoom += 0.1;
            activeSlide.style.scale = currZoom;
        }
    });

    zoomOut.addEventListener("click", () => {
        let activeSlide = document.querySelector(".galleryPopSlider .swiper-slide-active img");
        if (currZoom > minZoom) {
            currZoom -= 0.1;
            activeSlide.style.scale = currZoom;
        }
    });

    rotateLeft.addEventListener("click", () => {
        let activeSlide = document.querySelector(".galleryPopSlider .swiper-slide-active img");
        curRotate += 90;
        activeSlide.style.rotate = `${-curRotate}deg`;
    });

    rotateRight.addEventListener("click", () => {
        let activeSlide = document.querySelector(".galleryPopSlider .swiper-slide-active img");
        curRotate += 90;
        activeSlide.style.rotate = `${curRotate}deg`;
    });
    closepopupItem.addEventListener("click", (e) => {
        const getStatus = e.currentTarget.getAttribute("opengallery")
        if (getStatus == null) {
            console.log("Yes");
            showPopupGallry.style.display = "none"

        } else {
            showItemList.style.display = "flex"
            showImgItem.style.display = "none"
            // e.currentTarget.removeAttribute("opengallery")
        }


    })
    closepopupgallry.addEventListener("click", () => {
        showImgItem.style.opacity = "0"
        showImgItem.classList.add("invisible")
        closepopupItem.removeAttribute("opengallery")
    })
    openPopGallery.forEach(element => {
        element.addEventListener("click", function (params) {
            showPopupGallry.style.display = "flex"
        })
    });
    const marquee1 = document.querySelector('#marquee1 .marquee__inner');
    const marquee1Content = marquee1.innerHTML;
    marquee1.innerHTML = marquee1Content + marquee1Content;
    const marquee1Width = marquee1.offsetWidth / 2;
    gsap.fromTo(marquee1, {
        x: 0
    }, {
        x: -marquee1.scrollWidth / 2,
        duration: 30,
        ease: "none",
        repeat: -1
    });
    const marquee2 = document.querySelector('#marquee2 .marquee__inner');
    const marquee2Content = marquee2.innerHTML;
    marquee2.innerHTML = marquee2Content + marquee2Content;
    const marquee2Width = marquee2.offsetWidth / 2;
    gsap.fromTo(marquee2, {
        x: 0
    }, {
        x: marquee2Width,
        duration: 30,
        ease: "none",
        repeat: -1
    });