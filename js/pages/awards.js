// ============================================================
// pages/awards.js
// ============================================================
import { KL } from '../data.js';
import { animateCounter } from '../components.js';

export function renderAwards() {
  const page = document.getElementById('page-awards');
  if (!page) return;

  const totalAwards = KL.awards.reduce((sum, a) => sum + a.count, 0);

  page.innerHTML = `
    <div class="container section">
      <div class="section-header reveal">
        <span class="section-label">Achievements</span>
        <h1 class="section-title">Awards & Recognition</h1>
        <p style="color:var(--text-secondary);margin-top:1rem">
          The most decorated rapper of his generation — and the first hip-hop artist to win the Pulitzer Prize.
        </p>
      </div>

      <!-- Total counter -->
      <div class="glass-card reveal" style="padding:2rem;text-align:center;margin-bottom:3rem">
        <div style="font-family:var(--font-mono);font-size:.7rem;letter-spacing:.15em;color:var(--gold);margin-bottom:.5rem">Total Major Awards</div>
        <div class="counter" id="award-total-counter">0</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:.5rem">And counting…</div>
      </div>

      <div class="awards-grid stagger">
        ${KL.awards.map(award => `
          <div class="glass-card award-card" style="--card-color:${award.color}">
            <div class="award-icon">${award.icon}</div>
            <div class="award-category">${award.category}</div>
            <div class="award-count" id="award-counter-${award.category.replace(/\s+/g,'-')}" data-target="${award.count}">${award.count}</div>
            <div class="award-items">
              ${award.items.map(item => `<div class="award-item">▸ ${item}</div>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Animate counters on enter
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        const totalEl = page.querySelector('#award-total-counter');
        if (totalEl) animateCounter(totalEl, totalAwards, 2000);
        page.querySelectorAll('[data-target]').forEach(el => {
          const target = parseInt(el.getAttribute('data-target'));
          animateCounter(el, target, 1500);
        });
      }
    });
  }, { threshold: 0.2 });

  const grid = page.querySelector('.awards-grid');
  if (grid) observer.observe(grid);
}
