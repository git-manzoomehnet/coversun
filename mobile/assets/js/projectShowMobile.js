document.addEventListener('DOMContentLoaded', function () {
    const swiperConfigs = [
        {
            container: '.scrollProjectList-1',
            pagination: '.swiper-pagination-Project-1',
            nextEl: '.swiper-button-next-project-1',
            prevEl: '.swiper-button-prev-project-1',
            spaceBetween: 30,
            slidesPerView: 1.1,
        },
        {
            container: '.scrollProjectList-2',
            pagination: '.swiper-pagination-Project-2',
            nextEl: '.swiper-button-next-project-2',
            prevEl: '.swiper-button-prev-project-2',
            spaceBetween: 30,
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
                prevEl: config.prevEl,
            },
            autoplay: {
                delay: 3000 + (index * 500),
                disableOnInteraction: false
            },
            loop: true,
            speed: 800,
        });
    });
})
