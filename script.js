// 1. SMOOTH SCROLL (LENIS)
const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 2. REVEAL HERO TEXT
gsap.to(".reveal-box span", {
    translateY: 0,
    duration: 1.2,
    ease: "power4.out",
    delay: 0.5
});

// 3. PARALLAXE SUR LES IMAGES DE PROJET
gsap.utils.toArray('.parallax-img').forEach(img => {
    gsap.to(img, {
        y: "15%",
        ease: "none",
        scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});

// 4. CHANGER LA COULEUR DU BODY AU SCROLL
const panels = gsap.utils.toArray(".panel");
panels.forEach((panel) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top 40%",
        end: "bottom 40%",
        onEnter: () => updateTheme(panel),
        onEnterBack: () => updateTheme(panel),
    });
});

function updateTheme(panel) {
    if (panel.classList.contains('light')) {
        gsap.to("body", { backgroundColor: "#fff", color: "#000", duration: 0.5 });
    } else {
        gsap.to("body", { backgroundColor: "#050505", color: "#fff", duration: 0.5 });
    }
}
