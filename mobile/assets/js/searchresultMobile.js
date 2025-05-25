const inputSercht = document.querySelector("#inputSercht")
    const buttonSearcht = document.querySelector("#buttonSearcht")
    console.log(inputSercht);
    console.log(buttonSearcht);
    inputSercht.addEventListener("keydown", (e) => {        
        if (e.keyCode == 13 && e.value != '') {
            searchResult(e.target.value)
        }

    })
    buttonSearcht.addEventListener("click", () => {
        if (inputSerch.value != "") {
            searchResult(inputSercht.target.value)
        }

    })
    function searchResult(value) {
        window.location.href = `/search.bc?q=${value}`
    }
    document.addEventListener('DOMContentLoaded', function () {
        const swiperConfigs = [
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
                slidesPerView: 1.1,
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
                // autoplay: {
                //     delay: 3000 + (index * 500),
                //     disableOnInteraction: false
                // },
                loop: true,
                // speed: 800
            });
        });
    })
