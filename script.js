// 1. Smooth Scroll avec Lenis
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

// 2. Animation d'entrée (Text Reveal)
window.onload = () => {
    gsap.to(".line span", { translateY: 0, duration: 1.5, stagger: 0.2, ease: "power4.out" });
};

// 3. Parallaxe sur les images
gsap.utils.toArray('.parallax-img').forEach(img => {
    gsap.to(img, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});

// 4. Inversion de couleur des sections (GSAP ScrollTrigger)
gsap.utils.toArray(".section.light").forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => gsap.to("body", { backgroundColor: "#fff", color: "#000", duration: 0.6 }),
        onLeave: () => gsap.to("body", { backgroundColor: "#000", color: "#fff", duration: 0.6 }),
        onEnterBack: () => gsap.to("body", { backgroundColor: "#fff", color: "#000", duration: 0.6 }),
        onLeaveBack: () => gsap.to("body", { backgroundColor: "#000", color: "#fff", duration: 0.6 }),
    });
});
