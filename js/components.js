// ============================================================
// components.js — Shared UI components
// ============================================================

/* ── CUSTOM CURSOR (Removed) ───────────────────────────────── */
export function initCursor() {}

/* ── PARTICLE BACKGROUND ───────────────────────────────────── */
export function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  const count = Math.min(60, Math.floor(window.innerWidth / 24));
  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.5 + 0.3,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.5 + 0.1,
    color: Math.random() > 0.5 ? '#c0392b' : '#d4af37'
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections
    particles.forEach((p, i) => {
      particles.slice(i + 1).forEach(q => {
        const dx = p.x - q.x, dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 120) * 0.15;
          ctx.strokeStyle = '#d4af37';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
          ctx.restore();
        }
      });
    });

    // Draw particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(draw);
  }
  draw();
}

/* ── SCROLL PROGRESS ───────────────────────────────────────── */
export function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? (scrolled / total * 100) + '%' : '0%';
  }, { passive: true });
}

/* ── NAVBAR ────────────────────────────────────────────────── */
export function initNavbar(navigate) {
  const nav = document.getElementById('navbar');
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('nav-mobile');

  if (!nav) return;

  // Scroll effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Nav link clicks
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-nav');
      navigate(page);
      // Close mobile nav
      mobileNav?.classList.remove('open');
    });
  });

  // Hamburger
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      mobileNav?.classList.toggle('open');
    });
  }
}

/* ── BACK TO TOP ───────────────────────────────────────────── */
export function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── LOADING SCREEN ────────────────────────────────────────── */
export function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  const bar = document.querySelector('.loader-bar');
  if (!screen) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 25;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        screen.classList.add('hidden');
        document.body.style.overflow = '';
      }, 400);
    }
    if (bar) bar.style.width = progress + '%';
  }, 150);
}

/* ── SCROLL REVEAL ─────────────────────────────────────────── */
export function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .stagger').forEach(el => {
    observer.observe(el);
  });

  window.refreshReveal = () => {
    document.querySelectorAll('.reveal:not(.in-view), .stagger:not(.in-view)').forEach(el => {
      observer.observe(el);
    });
  };
}

/* ── ANIMATED COUNTER ──────────────────────────────────────── */
export function animateCounter(el, target, duration = 2000, suffix = '') {
  const start = performance.now();
  const startVal = 0;

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(startVal + (target - startVal) * eased);
    el.textContent = formatNumber(current) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function formatNumber(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(0) + 'K';
  return n.toString();
}

/* ── TOAST ─────────────────────────────────────────────────── */
export function showToast(message, type = '') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-12px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

/* ── MODAL ─────────────────────────────────────────────────── */
export function openModal(contentHTML) {
  let overlay = document.getElementById('global-modal');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'global-modal';
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `<div class="modal-box"><button class="modal-close" id="modal-close-btn">✕</button><div id="modal-content"></div></div>`;
    document.body.appendChild(overlay);
  }

  document.getElementById('modal-content').innerHTML = contentHTML;
  overlay.classList.add('open');

  const close = () => overlay.classList.remove('open');
  document.getElementById('modal-close-btn').onclick = close;
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); }, { once: true });
}

/* ── KEYBOARD SHORTCUTS ────────────────────────────────────── */
export function initKeyboardShortcuts(navigate) {
  const shortcuts = {
    '1': 'home', '2': 'biography', '3': 'discography',
    '4': 'songs', '5': 'analysis', '6': 'timeline',
    '7': 'awards', '8': 'collaborations', '9': 'evolution'
  };

  document.addEventListener('keydown', (e) => {
    // Alt + number to navigate
    if (e.altKey && shortcuts[e.key]) {
      navigate(shortcuts[e.key]);
    }
    // Alt+/ to show shortcuts
    if (e.altKey && e.key === '/') {
      showToast('Alt+1-9: Navigate pages | Esc: Close modal');
    }
  });
}

/* ── SETTINGS MANAGER ──────────────────────────────────────── */
export function applySettings() {
  const settings = JSON.parse(localStorage.getItem('kl_settings') || '{}');

  // Theme
  if (settings.theme) {
    document.documentElement.setAttribute('data-theme', settings.theme);
  }

  // Accent color
  if (settings.accent) {
    const root = document.documentElement;
    const accents = {
      red: ['#c0392b', '#e74c3c', '#922b21'],
      gold: ['#d4af37', '#f4d03f', '#b7950b'],
      blue: ['#2980b9', '#3498db', '#1a6891'],
      purple: ['#8e44ad', '#9b59b6', '#6c3483']
    };
    if (accents[settings.accent]) {
      root.style.setProperty('--red', accents[settings.accent][0]);
      root.style.setProperty('--red-light', accents[settings.accent][1]);
      root.style.setProperty('--red-dark', accents[settings.accent][2]);
      root.style.setProperty('--accent', accents[settings.accent][0]);
    }
  }

  // Font size
  if (settings.fontSize) {
    document.documentElement.style.fontSize = settings.fontSize + 'px';
  }

  // Reduce motion
  if (settings.reduceMotion) {
    document.body.classList.add('reduce-motion');
  }
}
