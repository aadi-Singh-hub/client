// BharatSkills Foundation shared interactions

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  setupFadeInAnimations();
  setupCounters();
  setupTestimonialSlider();
  setupDarkMode();
});

function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-page]').forEach((link) => {
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });
}

function setupFadeInAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}

function setupCounters() {
  const counters = document.querySelectorAll('.counter[data-target]');
  if (!counters.length) return;

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  let current = 0;
  const increment = Math.max(1, Math.ceil(target / 100));

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      counter.innerText = `${target}+`;
      clearInterval(timer);
    } else {
      counter.innerText = `${current}+`;
    }
  }, 20);
}

function setupTestimonialSlider() {
  const slides = document.querySelectorAll('.testimonial-slide');
  if (!slides.length) return;

  let index = 0;
  slides[index].classList.add('active');

  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 4000);
}

function setupDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  if (!toggle) return;

  const savedMode = localStorage.getItem('bharatskills-theme');
  if (savedMode === 'dark') {
    document.body.classList.add('dark-mode');
  }

  updateToggleText(toggle);

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('bharatskills-theme', mode);
    updateToggleText(toggle);
  });
}

function updateToggleText(toggle) {
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}
