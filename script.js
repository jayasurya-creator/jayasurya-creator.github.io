// =============================================
// script.js — JavaScript for Jayasurya's Portfolio
// You do NOT need to edit anything in this file!
// It just handles:
//   1. Hamburger menu open/close
//   2. Skill bar animation on scroll
//   3. Contact form submit message
// =============================================


// ─── 1. HAMBURGER MENU (Mobile) ───────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close the menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});


// ─── 2. SKILL BAR ANIMATION ───────────────────
// When a skill card scrolls into view, fill the bar to the set %
const skillCards = document.querySelectorAll('.skill-card');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.bar-fill');
      if (fill) {
        // Gets the % from data-width="XX" in HTML
        fill.style.width = fill.dataset.width + '%';
      }
    }
  });
}, { threshold: 0.3 });

skillCards.forEach(card => skillObserver.observe(card));


// ─── 3. CONTACT FORM SUBMIT ───────────────────
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Stops page from refreshing

  const btn = contactForm.querySelector('button[type="submit"]');

  // Show success message
  btn.textContent = '✓ Message Sent!';
  btn.style.background = 'linear-gradient(135deg, #00b894, #00cec9)';

  // Reset after 3 seconds
  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.background = '';
    contactForm.reset();
  }, 3000);
});