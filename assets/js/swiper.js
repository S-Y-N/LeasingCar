const swiper = new Swiper(".swiper", {
    effect: "fade",
    speed: 600,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

});