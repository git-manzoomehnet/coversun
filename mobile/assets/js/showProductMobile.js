document.addEventListener('DOMContentLoaded', function () {
    const swiperConfigs = [
        {
            container: '.scrollProjectList-1',
            pagination: '.swiper-pagination-Project-1',
            nextEl: '.swiper-button-next-project-1',
            prevEl: '.swiper-button-prev-project-1',
            spaceBetween: 10,
            slidesPerView: 1,
        },
        {
            container: '.scrollProjectList-2',
            pagination: '.swiper-pagination-Project-2',
            nextEl: '.swiper-button-next-project-2',
            prevEl: '.swiper-button-prev-project-2',
            spaceBetween: 10,
            slidesPerView: 1,
        },
        {
            container: '.scrollProjectList-3',
            pagination: '.swiper-pagination-Project-3',
            nextEl: '.swiper-button-next-project-3',
            prevEl: '.swiper-button-prev-project-3',
            spaceBetween: 10,
            slidesPerView: 1.1,
        },
        {
            container: '.scrollProjectList-4',
            pagination: '.swiper-pagination-Project-4',
            nextEl: '.swiper-button-next-project-4',
            prevEl: '.swiper-button-prev-project-4',
            spaceBetween: 10,
            slidesPerView: 1,
        },

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
            speed: 800
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const body = this.nextElementSibling;

            if (body.style.maxHeight) {
                body.style.maxHeight = null;
                this.querySelector('.icon').innerHTML = '<svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.25L6.5 6.75L1 1.25" stroke="black"/></svg>';
            } else {
                document.querySelectorAll('.accordion-body').forEach(b => {
                    b.style.maxHeight = null;
                });
                document.querySelectorAll('.icon').forEach(icon => {
                    icon.innerHTML = '<svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.25L6.5 6.75L1 1.25" stroke="black"/></svg>';
                });

                body.style.maxHeight = body.scrollHeight + 'px';
                this.querySelector('.icon').textContent = '−';
            }
        });
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

        let val = document.querySelector(".commentP _textarea").value;
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

