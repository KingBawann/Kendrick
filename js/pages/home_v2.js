// ============================================================
// pages/home.js
// ============================================================
import { KL } from '../data.js';
import { animateCounter } from '../components.js';

export function renderHome() {
  const page = document.getElementById('page-home');
  if (!page) return;

  page.innerHTML = `
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-noise"></div>
      </div>
      <div class="hero-content">
        <span class="hero-eyebrow">Compton, California · Est. 1987</span>
        <h1 class="hero-title">
          <span class="hero-title-line1">Kendrick</span>
          <span class="hero-title-line2">Lamar</span>
        </h1>
        <p class="hero-subtitle">
          <strong>Pulitzer Prize-winning</strong> rapper, songwriter, and storyteller.
          The voice of a generation. The architect of modern hip-hop.
        </p>
        <div class="hero-buttons">
          <button class="btn btn-primary" data-nav="discography">
            <span>🎵</span> Explore Albums
          </button>
          <button class="btn btn-gold" data-nav="timeline">
            <span>📅</span> Timeline
          </button>
          <button class="btn btn-outline" data-nav="biography">
            <span>📖</span> Biography
          </button>
        </div>
        <div class="hero-stats">
          <div class="hero-stat">
            <div class="hero-stat-value counter-grammys">0</div>
            <div class="hero-stat-label">Grammy Awards</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-value">1</div>
            <div class="hero-stat-label">Pulitzer Prize</div>
          </div>
          <div class="hero-stat">
            <div class="hero-stat-value counter-listeners">0</div>
            <div class="hero-stat-label">Monthly Listeners</div>
          </div>
        </div>
      </div>
      <div class="hero-scroll-indicator">
        <div class="scroll-mouse"><div class="scroll-wheel"></div></div>
        <span class="scroll-text">Scroll</span>
      </div>
    </section>

    <!-- ALBUM STRIP -->
    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Discography</span>
          <h2 class="section-title">The Albums</h2>
        </div>
        <div class="home-albums-strip stagger">
          ${KL.albums.map(album => `
            <div class="home-album-chip" data-nav="discography" title="${album.title}">
              ${album.image
                ? `<img src="${album.image}" alt="${album.title}" loading="lazy">`
                : `<div class="home-album-chip-placeholder" style="background:${album.color}20;border:1px solid ${album.color}40">${album.title.charAt(0)}</div>`
              }
              <div class="home-album-chip-title">${album.title}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- STATS SECTION -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">By the Numbers</span>
          <h2 class="section-title">A Career in Stats</h2>
        </div>
        <div class="stats-grid stagger">
          <div class="stat-card">
            <div class="counter counter-g2">0</div>
            <div class="stat-label">Grammy Wins</div>
          </div>
          <div class="stat-card">
            <div class="counter counter-a2">0</div>
            <div class="stat-label">Albums Released</div>
          </div>
          <div class="stat-card">
            <div class="counter counter-s2">0</div>
            <div class="stat-label">Monthly Listeners</div>
          </div>
          <div class="stat-card">
            <div class="counter counter-p2">0</div>
            <div class="stat-label">Pulitzer Prize</div>
          </div>
          <div class="stat-card">
            <div class="counter counter-c2">0</div>
            <div class="stat-label">Countries Toured</div>
          </div>
        </div>
      </div>
    </section>

    <!-- QUICK LINKS -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Explore</span>
          <h2 class="section-title">Discover More</h2>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1rem" class="stagger">
          ${[
            { page: 'biography', icon: '📖', title: 'Biography', desc: 'From Compton to the Pulitzer Prize' },
            { page: 'awards', icon: '🏆', title: 'Awards', desc: '27 Grammys & counting' },
            { page: 'quiz', icon: '🧠', title: 'Quiz', desc: 'Test your KL knowledge' },
            { page: 'quotes', icon: '💬', title: 'Quotes', desc: 'Words from the GOAT' },
            { page: 'facts', icon: '💡', title: 'Fun Facts', desc: 'Surprising things you didn\'t know' },
            { page: 'collaborations', icon: '🕸️', title: 'Collaborations', desc: 'His musical universe' },
            { page: 'gallery', icon: '🖼️', title: 'Gallery', desc: 'Visual legacy' }
          ].map(item => `
            <div class="glass-card" style="padding:1.5rem;cursor:pointer" data-nav="${item.page}">
              <div style="font-size:2rem;margin-bottom:.75rem">${item.icon}</div>
              <h4 style="margin-bottom:.25rem;font-family:var(--font-display)">${item.title}</h4>
              <p style="font-size:.8rem;color:var(--text-muted);max-width:none">${item.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>


  `;

  // Wire nav buttons within hero
  page.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => {
      window.__navigate(el.getAttribute('data-nav'));
    });
  });

  // Animate counters when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        setTimeout(() => {
          // Hero counters
          const gc = page.querySelector('.counter-grammys');
          const lc = page.querySelector('.counter-listeners');
          if (gc) animateCounter(gc, KL.stats.grammyWins, 1500);
          if (lc) animateCounter(lc, KL.stats.spotifyMonthlyListeners, 1800);

          // Stats section counters
          const g2 = page.querySelector('.counter-g2');
          const a2 = page.querySelector('.counter-a2');
          const s2 = page.querySelector('.counter-s2');
          const p2 = page.querySelector('.counter-p2');
          const c2 = page.querySelector('.counter-c2');
          if (g2) animateCounter(g2, KL.stats.grammyWins, 2000);
          if (a2) animateCounter(a2, KL.stats.albumCount, 1200);
          if (s2) animateCounter(s2, KL.stats.spotifyMonthlyListeners, 2000);
          if (p2) animateCounter(p2, KL.stats.pulitzerPrize, 800);
          if (c2) animateCounter(c2, KL.stats.countriesOnTour, 1500);
        }, 300);
      }
    });
  }, { threshold: 0.3 });

  const heroStats = page.querySelector('.hero-stats');
  if (heroStats) observer.observe(heroStats);
}
