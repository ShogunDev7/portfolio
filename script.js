// 1. Initialisation du Smooth Scroll (Lenis)
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 2. Gestion du changement de couleur au scroll
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        // Si la section occupe le centre de l'écran
        if (sectionTop < window.innerHeight / 2 && sectionTop > -window.innerHeight / 2) {
            const colorScheme = section.getAttribute('data-color');
            
            if (colorScheme === 'light') {
                document.body.classList.add('light-mode');
            } else {
                document.body.classList.remove('light-mode');
            }
        }
    });
});

// 3. Petite animation d'apparition simple
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('h2, .project-card').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 1s ease-out";
    observer.observe(el);
});
