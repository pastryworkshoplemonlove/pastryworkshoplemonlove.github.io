// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Initialize ScrollReveal
ScrollReveal().reveal('.hero h1', { delay: 500, origin: 'left', distance: '50px' });
ScrollReveal().reveal('.hero p', { delay: 700, origin: 'left', distance: '50px' });
ScrollReveal().reveal('.hero a', { delay: 900, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('.about img', { delay: 500, origin: 'left', distance: '50px' });
ScrollReveal().reveal('.about h2', { delay: 700, origin: 'right', distance: '50px' });
ScrollReveal().reveal('.about p', { delay: 900, origin: 'right', distance: '50px' });
ScrollReveal().reveal('.products h2', { delay: 500, origin: 'top', distance: '50px' });
ScrollReveal().reveal('.contact h2', { delay: 500, origin: 'top', distance: '50px' });

// Add GSAP animations
gsap.from('.hero', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top',
        end: '100%',
        scrub: true,
    },
    scale: 0.9,
    opacity: 0,
    duration: 2,
});

gsap.from('.about', {
    scrollTrigger: {
        trigger: '.about',
        start: 'top',
        end: '100%',
        scrub: true,
    },
    x: '-100%',
    opacity: 0,
    duration: 2,
});

gsap.from('.products', {
    scrollTrigger: {
        trigger: '.products',
        start: 'top',
        end: '100%',
        scrub: true,
    },
    y: '100%',
    opacity: 0,
    duration: 2,
});

gsap.from('.contact', {
    scrollTrigger: {
        trigger: '.contact',
        start: 'top',
        end: '100%',
        scrub: true,
    },
    x: '100%',
    opacity: 0,
    duration: 2,
});