import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper";
import swiper from "swiper";

if (document.querySelector('.swiper-container')) {

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
}


//Checkbox toggle
if (document.querySelector('.bg-check')) {
    document.getElementById('checkbox').addEventListener('click', () => {
        document.querySelector('.bg-check').classList.toggle('hidden');
    });
}

// Toggle active class
if (document.querySelector('.nav-item')) {
    const menuItem = document.querySelectorAll('.nav-item');

    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener('click', function () {
            const current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace(' active', '');
            this.className += ' active';
        });
    }

}