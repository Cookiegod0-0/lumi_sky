// Слайдер
const swiper = new Swiper('.swiper', {
    speed: 500,
    spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    effect: "cube",
    fadeEffect: {
        crossFade : true
    },
});

  // Условие: когда пользователь прокрутит вниз 1000рх, кнопка появляется. Когда нажимает - перекидывает наверх

window.onscroll=function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById('buttonUp').style.display = "block";
    }
    else{
        document.getElementById('buttonUp').style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}