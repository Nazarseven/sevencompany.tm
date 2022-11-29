const nav = document.getElementById('nav')
const openBtn = document.querySelector('.menu')
const closeBtn = document.querySelector('.close-btn')
const upClose = document.getElementById('up-header-close')
const upHeader = document.getElementById('up-header')
/* SCROLL */
new WOW().init();
/* SCROLL */
openBtn.addEventListener('click', () => {
    nav.style.left = '0%'
    openBtn.style.display = 'none'
    closeBtn.style.display = 'block'
    upHeader.style.display = 'none'
})
closeBtn.addEventListener('click', () => {
    nav.style.left = '-100%'
    openBtn.style.display = 'block'
    closeBtn.style.display = 'none'
})
upClose.addEventListener('click', () => {
    upHeader.style.display = 'none'
})
/*  */
var swiper = new Swiper(".mySwiper", {
spaceBetween: 30,
centeredSlides: true,
autoplay: {
delay: 3500,
disableOnInteraction: false,
},
pagination: {
el: ".swiper-pagination",
clickable: true,
},
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
});