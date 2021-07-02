window.onscroll = function () {Sticky()};
const nav = document.querySelector('nav');
function Sticky() {
    if (window.scrollY > 150) {
        nav.classList.add('sticky-scroll');
    } else {
        nav.classList.remove('sticky-scroll');   
    }
}