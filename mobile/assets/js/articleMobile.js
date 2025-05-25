document.addEventListener('DOMContentLoaded', function () {
    const swiperConfigs = [
        {
            container: '.scrollProjectList-2',
            pagination: '.swiper-pagination-Project-2',
            nextEl: '.swiper-button-next-project-2',
            prevEl: '.swiper-button-prev-project-2',
            spaceBetween: 15,
            slidesPerView: 1,
        },
        {
            container: '.scrollProjectList-3',
            pagination: '.swiper-pagination-Project-3',
            nextEl: '.swiper-button-next-project-3',
            prevEl: '.swiper-button-prev-project-3',
            spaceBetween: 15,
            slidesPerView: 1.1,
        },
        {
            container: '.scrollProjectList-4',
            pagination: '.swiper-pagination-Project-4',
            nextEl: '.swiper-button-next-project-4',
            prevEl: '.swiper-button-prev-project-4',
            spaceBetween: 15,
            slidesPerView: 1.1,
        },
        {
            container: '.scrollProjectList-5',
            pagination: '.swiper-pagination-Project-4',
            nextEl: '.swiper-button-next-project-4',
            prevEl: '.swiper-button-prev-project-4',
            spaceBetween: 23,
            slidesPerView: 1.2,
        }
    ];

    swiperConfigs.forEach((config, index) => {
        new Swiper(config.container, {
            spaceBetween: config.spaceBetween,
            slidesPerView: config.slidesPerView,
            pagination: {
                el: config.pagination,
            },
            navigation: {
                nextEl: config.nextEl,
                prevEl: config.prevEl
            },
            autoplay: {
                delay: 3000 + (index * 500),
                disableOnInteraction: false
            },
            loop: true,
            // speed: 800
        });
    });
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
    const shareBtn = document.querySelector("#shareBtn")        
    const closeBtn = document.getElementById('closepopupshare');
    const shareBox = document.getElementById('shareBox');
    const popup = document.querySelector('.pupUpShare');
    shareBtn.addEventListener("click", () => { popup.classList.add("hidden-popup") })
    closeBtn.addEventListener('click', () => {
        popup.classList.remove("hidden-popup")
    });
    shareBox.addEventListener('click', (event) => {
        event.stopPropagation();
        if (event.target.closest("#copylinkm")) {
            navigator.clipboard.writeText(window.location.href).then(() => {
                console.log('Link copied to clipboard!');
                setTimeout(() => {
            popup.classList.remove("hidden-popup")
        }, 2000)
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }
        if (event.target.tagName.toLowerCase() === 'li') {
            setTimeout(() => {
            popup.classList.remove("hidden-popup")
        }, 2000)
        }

        
    });
    popup.addEventListener('click', (event) => {
        popup.classList.remove("hidden-popup")
    });
});

let messageSend = document.querySelector(".messageSend")
let commentP = document.querySelector(".commentP")

function renderCommentFn(args) {

}
document.querySelector('.submitComment').addEventListener('click', (event) => {
    //  let input1  = document.querySelector('.namee')
    event.preventDefault();
    let textar = document.querySelectorAll('.commentP input')
    let emptyFlag = false;
    textar.forEach(element => {
        if (element.value == "") {
            emptyFlag = true
        }
    });
    if (!emptyFlag) {

        let val = document.querySelector(".commentP textarea").value;
        let userName = document.querySelector(".commentP .userName").value;

        $bc.setSource('db.send', true)
        $bc.setSource('db.senduserName', userName)
        $bc.setSource('db.sendcomment', val)
        $bc.setSource('db.run', true)
        let sendbox = document.querySelector('.messageSend')
        let text = sendbox.querySelector('p')
        text.innerHTML = 'درخواست شما با موفقیت ثبت شد'
        commentP.reset()
        messageSend.style.display = "block"

        document.querySelector(".commentP").reset();
        setTimeout(() => {
            messageSend.style.display = "none"
        }, 3500)
    } else {
        let sendbox = document.querySelector('.messageSend')
        let text = sendbox.querySelector('p')
        text.innerHTML = 'فیلدهای الزامی را پر کنید'
        messageSend.style.display = "block"

        setTimeout(() => {
            messageSend.style.display = "none"
        }, 3500)

    }


})


