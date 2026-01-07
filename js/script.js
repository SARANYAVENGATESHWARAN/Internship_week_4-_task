/* =========================
   Mobile Menu Toggle
========================= */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

/* =========================
   Scroll Animation
========================= */
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "0.6s ease";
  observer.observe(section);
});

/* =========================
   Card Hover Enhancement
========================= */
const cards = document.querySelectorAll(".card, .feature-box");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transition = "0.3s";
  });
});
