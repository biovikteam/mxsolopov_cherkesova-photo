export const heroSection = (function () {

    // 'use strict';

    const heroImgWrap = document.querySelector('.hero__img-wrap'),
        heroImg = document.querySelectorAll('.hero__img'),
        windowWidth = window.innerWidth;

    function heroTouch(actionOn, actionOff) {
        heroImgWrap.addEventListener(actionOn, () => {
            heroImg.forEach((item, i) => {
                heroImg[i].style.transform = 'translateY(0)';
            });
        });
        heroImgWrap.addEventListener(actionOff, () => {
            for (let i = 1; i <= heroImg.length; i++) {
                if (i % 2 == 0) {
                    heroImg[i - 1].style.transform = 'translateY(6%)';
                } else {
                    heroImg[i - 1].style.transform = 'translateY(-6%)';
                }
            }
        });
    }

    if (windowWidth < 1024) {
        heroTouch('touchstart', 'touchend');
    }

}());