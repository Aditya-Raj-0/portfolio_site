const cursorGlow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});


// Scroll Reveal Animation

const sections = document.querySelectorAll('.section, .hero');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});


// Mobile Navbar

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {

    navLinks.classList.toggle('mobile-active');

});


// Active Navbar Highlight

const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 300){
            current = section.getAttribute('id');
        }

    });

    navItems.forEach(link => {

        link.classList.remove('active');

        if(link.getAttribute('href') === `#${current}`){
            link.classList.add('active');
        }

    });

});