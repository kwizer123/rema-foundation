/* ─── HELPER: Intersection Observer to trigger GSAP on scroll ─── */
function onVisible(selector, animProps, options = {}) {
  const els = document.querySelectorAll(selector);
  if (!els.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { ...animProps, ease: animProps.ease || "power3.out" });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: options.threshold || 0.15 }
  );

  els.forEach((el) => {
    gsap.set(el, options.from || { opacity: 0, y: 50 });
    observer.observe(el);
  });
}

/* ─── HERO (runs immediately on load) ─── */
const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

heroTl
  .from("section.gradient-bg h2", { y: 60, opacity: 0, duration: 1 })
  .from("section.gradient-bg p.text-base", { y: 40, opacity: 0, duration: 0.9 }, "-=0.6")
  .from("section.gradient-bg .flex.flex-col a", { y: 30, opacity: 0, duration: 0.7, stagger: 0.15 }, "-=0.5")
  .from(".relative.w-72", { x: 80, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.8")
  .from(".absolute.-top-3, .absolute.-bottom-4", { scale: 0, opacity: 0, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)" }, "-=0.4");

/* ─── STATS: number counters ─── */
function animateCounter(el) {
  const raw = el.textContent.trim();
  const num = parseInt(raw.replace(/\D/g, ""));
  const suffix = raw.replace(/[0-9]/g, "");
  const obj = { val: 0 };
  gsap.to(obj, {
    val: num,
    duration: 2,
    ease: "power1.out",
    onUpdate: () => { el.textContent = Math.round(obj.val) + suffix; },
  });
}

const statEls = document.querySelectorAll(".text-3xl.font-bold.text-orange-500");
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
statEls.forEach((el) => statObserver.observe(el));

onVisible(".grid.grid-cols-2 .text-center", {
  opacity: 1, y: 0, duration: 0.7, stagger: 0.15,
});

/* ─── WHO WE ARE ─── */
onVisible(".bg-gray-50 .text-center h2", { opacity: 1, y: 0, duration: 0.8 });
onVisible(".bg-gray-50 .text-center p",  { opacity: 1, y: 0, duration: 0.8, delay: 0.15 });

onVisible(".bg-gray-50 .grid.md\\:grid-cols-3 > div", {
  opacity: 1, y: 0, duration: 0.8, stagger: 0.2,
});

document.querySelectorAll(".bg-gray-50 .w-16.h-16").forEach((icon) => {
  gsap.set(icon, { scale: 0, rotation: -15, opacity: 0 });
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        gsap.to(icon, { scale: 1, rotation: 0, opacity: 1, duration: 0.6, ease: "back.out(2)" });
        obs.unobserve(icon);
      }
    });
  }, { threshold: 0.4 });
  obs.observe(icon);
});

/* ─── PROGRAMS ─── */
onVisible(".bg-white .text-center h2", { opacity: 1, y: 0, duration: 0.8 });
onVisible(".bg-white .text-center p",  { opacity: 1, y: 0, duration: 0.8, delay: 0.15 });

onVisible(".grid.sm\\:grid-cols-2 > div", {
  opacity: 1, y: 0, duration: 0.75, stagger: 0.12,
}, { from: { opacity: 0, y: 70 } });

document.querySelectorAll(".grid.sm\\:grid-cols-2 > div").forEach((card) => {
  card.addEventListener("mouseenter", () => gsap.to(card, { y: -8, scale: 1.02, duration: 0.3, ease: "power2.out" }));
  card.addEventListener("mouseleave", () => gsap.to(card, { y: 0,  scale: 1,    duration: 0.3, ease: "power2.out" }));
});

/* ─── CTA ─── */
onVisible("section.gradient-bg.py-16 h2", { opacity: 1, y: 0, duration: 0.9 });
onVisible("section.gradient-bg.py-16 p",  { opacity: 1, y: 0, duration: 0.8, delay: 0.2 });
onVisible("section.gradient-bg.py-16 a",  { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, delay: 0.3, ease: "back.out(1.5)" });

/* ─── DONATE BUTTON PULSE ─── */
const donateBtn = document.querySelector('a[href="donate.html"]');
if (donateBtn) {
  gsap.to(donateBtn, {
    boxShadow: "0 0 0 12px rgba(249,115,22,0)",
    repeat: -1,
    duration: 1.5,
    ease: "power1.inOut",
  });
}