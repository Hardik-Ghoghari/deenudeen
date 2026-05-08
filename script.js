// Initialize Animations
AOS.init({
    duration: 1200,
    once: true
});

// Typed.js Effect
const typed = new Typed('.typing-text', {
    strings: ['Thurabudeen Maboob Basha', 'a CS Postgrad', 'an Operations Analyst', 'an IT Specialist'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// Active Link Highlighting on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// Video control on hover - added to prevent manual click needed
document.querySelectorAll('video').forEach(v => {
    v.addEventListener('mouseover', () => v.play());
    v.addEventListener('mouseout', () => v.pause());
});