// ═══════════════════════════════════════════
// SAKTHIVEL V — PORTFOLIO SCRIPT
// ═══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // ── Loader ──
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = document.getElementById('loader');
      if (loader) loader.classList.add('hidden');
      triggerHeroAnims();
    }, 400);
  });

  function triggerHeroAnims() {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setTimeout(() => el.classList.add('visible'), i * 80);
      }
    });
  }

  // ── Typing animation ──
  const phrases = [
    'Flutter Developer 📱',
    'Web Developer 🌐',
    'ECE Student ⚡',
    'IoT Enthusiast 🔧',
    'Mobile App Developer 🚀'
  ];
  let phraseIdx = 0, charIdx = 0, deleting = false;
  const typingEl = document.getElementById('typing-text');

  function type() {
    if (!typingEl) return;
    const current = phrases[phraseIdx];
    if (!deleting) {
      typingEl.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      typingEl.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
      }
    }
    setTimeout(type, deleting ? 60 : 90);
  }
  setTimeout(type, 800);

  // ── Navbar scroll + active links ──
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const scrollTopBtn = document.getElementById('scroll-top');

  window.addEventListener('scroll', () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
    if (scrollTopBtn) scrollTopBtn.classList.toggle('show', window.scrollY > 400);

    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 130) current = s.id;
    });

    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });

    document.querySelectorAll('.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible)').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add('visible');
    });

    document.querySelectorAll('.skill-fill').forEach(bar => {
      if (bar.getBoundingClientRect().top < window.innerHeight - 60 && !bar.style.width) {
        bar.style.width = bar.dataset.width + '%';
      }
    });
  });

  // ── Scroll top ──
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ── Theme toggle ──
  const toggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (toggle) toggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  if (toggle) {
    toggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      toggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });
  }

  // ── Hamburger + Mobile Menu ──
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');
  if (ham && mob) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      mob.classList.toggle('open');
    });
    document.querySelectorAll('.mob-link').forEach(l => {
      l.addEventListener('click', () => {
        ham.classList.remove('open');
        mob.classList.remove('open');
      });
    });
  }

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ── Photo loader ──
  const MY_PHOTO = 'sakthi.jpg';
  if (MY_PHOTO) {
    const img = document.getElementById('avatar-img');
    const fallback = document.getElementById('avatar-fallback');
    if (img && fallback) {
      img.src = MY_PHOTO;
      img.onload = () => {
        img.style.display = 'block';
        fallback.style.display = 'none';
      };
      img.onerror = () => {
        img.style.display = 'none';
        fallback.style.display = 'flex';
      };
    }
  }

  // ── Contact Form Handling ──
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending... ⏳';
      submitBtn.disabled = true;

      const formData = new FormData(contactForm);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });

        const data = await response.json();
        if (data.success) {
          formStatus.textContent = '✅ Message sent successfully! I will get back to you soon.';
          formStatus.className = 'form-status success';
          contactForm.reset();
        } else {
          throw new Error(data.message || 'Submission failed');
        }
      } catch (err) {
        // Fallback: Direct email intent if web3forms isn't configured
        const name = formData.get('name') || '';
        const email = formData.get('email') || '';
        const message = formData.get('message') || '';

        window.location.href = `mailto:sakthivelvelmurugan7815@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;

        formStatus.textContent = '📩 Opening your email app to send the message...';
        formStatus.className = 'form-status success';
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }
});
