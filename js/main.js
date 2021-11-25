'use strict';


// При кліці плавна прокрутка

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

// При кліці на кнопку "more details" з'являється текст

let text = document.getElementById('text_1');
let btnshow = document.querySelector('.show_1');

btnshow.addEventListener('click', function(){
    text.classList.toggle('textHidden_1');
    let isClosed_1 = text.classList.contains('textHidden_1')

    if (isClosed_1) {
        btnshow.innerText = 'MORE DETAILS';
    } else {
        btnshow.innerText = 'COLLAPSE';
    }
});

let textTwo = document.getElementById('text_2');
let btnshowTwo = document.querySelector('.show_2');

btnshowTwo.addEventListener('click', function(){
    textTwo.classList.toggle('textHidden_2');
    let isClosed_2 = textTwo.classList.contains('textHidden_2')

    if (isClosed_2) {
        btnshowTwo.innerText = 'MORE DETAILS';
    } else {
        btnshowTwo.innerText = 'COLLAPSE';
    }
});

// Слайдер в блоці NEWS

$(document).ready(function(){
    $('.n-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        speed: 500,
        waitForAnimate: false,
        centerMode: true,
        cssEase: 'linear',
        prevArrow: '<div class="my-prev"></div>',
        nextArrow: '<div class="my-next"></div>',
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            }
        ]
    });
});

// При кліці на кнопку "more details" з'являється логотип

let photos = document.getElementById('photos');
let btnshowThree = document.querySelector('.show_3');

btnshowThree.addEventListener('click', function(){
    photos.classList.toggle('photos_show');
    let isClosed = photos.classList.contains('photos_show')

    if (isClosed) {
        btnshowThree.innerText = 'MORE DETAILS';
    } else {
        btnshowThree.innerText = 'COLLAPSE';
    }
});