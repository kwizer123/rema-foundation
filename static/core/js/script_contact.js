document.addEventListener("DOMContentLoaded", () => {

    // Register plugin
    gsap.registerPlugin(ScrollTrigger);

    // 🔥 HERO (keep on load)
    gsap.from(".gradient-bg h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from(".gradient-bg p", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2
    });

    // 🔥 CONTACT CARDS (scroll in)
    gsap.from(".hover-lift", {
        scrollTrigger: {
            trigger: ".hover-lift",
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    // 🔥 FORM SECTION (left side)
    gsap.from(".lg\\:col-span-3", {
        scrollTrigger: {
            trigger: ".lg\\:col-span-3",
            start: "top 80%",
        },
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // 🔥 SIDEBAR (right side)
    gsap.from(".lg\\:col-span-2", {
        scrollTrigger: {
            trigger: ".lg\\:col-span-2",
            start: "top 80%",
        },
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // 🔥 FORM FIELDS (staggered)
    gsap.from("form .form-input", {
        scrollTrigger: {
            trigger: "form",
            start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08
    });

    // 🔥 SIDEBAR CARDS (map, social, faq)
    gsap.from(".lg\\:col-span-2 > div", {
        scrollTrigger: {
            trigger: ".lg\\:col-span-2",
            start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2
    });

    // 🔥 CTA SECTION
    gsap.from("section.gradient-bg:last-of-type h2", {
        scrollTrigger: {
            trigger: "section.gradient-bg:last-of-type",
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

});