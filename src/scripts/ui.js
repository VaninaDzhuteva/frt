var mySwiper = new Swiper('.swiper-container', {
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

document.getElementById('checkbox').addEventListener('click', () => {
    document.querySelector('.bg-check').classList.toggle('hidden');
});