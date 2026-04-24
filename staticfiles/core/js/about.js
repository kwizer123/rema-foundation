document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    // 🔥 HERO SECTION (on load)
    gsap.from(".gradient-bg h1", {
        y: 60,
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

    gsap.from(".gradient-bg span", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
    });

    // 🔥 MISSION SECTION (image + text split)
    gsap.from("section.mb-20:first-of-type img", {
        scrollTrigger: {
            trigger: "section.mb-20:first-of-type",
            start: "top 80%",
        },
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from("section.mb-20:first-of-type div:nth-child(2)", {
        scrollTrigger: {
            trigger: "section.mb-20:first-of-type",
            start: "top 80%",
        },
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // 🔥 VISION SECTION (opposite direction)
    gsap.from("section.mb-20:nth-of-type(2) img", {
        scrollTrigger: {
            trigger: "section.mb-20:nth-of-type(2)",
            start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    gsap.from("section.mb-20:nth-of-type(2) div:first-child", {
        scrollTrigger: {
            trigger: "section.mb-20:nth-of-type(2)",
            start: "top 80%",
        },
        x: -60,
        opacity: 0,
        duration: 1
    });

    // 🔥 CORE VALUES (cards stagger)
    gsap.from(".hover-lift", {
        scrollTrigger: {
            trigger: ".hover-lift",
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out"
    });

    // 🔥 IMPACT IMAGE (zoom in)
    gsap.from("img[src*='unity']", {
        scrollTrigger: {
            trigger: "img[src*='unity']",
            start: "top 85%",
        },
        scale: 1.2,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    });

    // 🔥 STATS COUNTERS (pop effect)
    gsap.from(".text-4xl, .text-5xl", {
        scrollTrigger: {
            trigger: ".grid.grid-cols-2",
            start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });

    // 🔥 CTA SECTION
    gsap.from("main section:last-of-type", {
        scrollTrigger: {
            trigger: "main section:last-of-type",
            start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1
    });

});