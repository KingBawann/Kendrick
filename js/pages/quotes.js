// ============================================================
// pages/quotes.js
// ============================================================
import { KL } from '../data.js';

export function renderQuotes() {
  const page = document.getElementById('page-quotes');
  if (!page) return;

  page.innerHTML = `
    <div class="container section">
      <div class="section-header reveal">
        <span class="section-label">Words of Wisdom</span>
        <h1 class="section-title">Quotes</h1>
        <p style="color:var(--text-secondary);margin-top:.75rem">
          From interviews and speeches — not song lyrics. The mind behind the music.
        </p>
      </div>

      <!-- Featured quote (rotating) -->
      <div class="glass-card reveal" style="padding:3rem;text-align:center;margin-bottom:3rem;position:relative;overflow:hidden">
        <div style="position:absolute;top:1rem;left:2rem;font-size:8rem;font-family:var(--font-display);color:var(--red);opacity:.1;line-height:1;pointer-events:none">"</div>
        <p id="featured-quote" style="font-family:var(--font-display);font-size:clamp(1.1rem,2.5vw,1.5rem);font-style:italic;line-height:1.7;color:var(--text-primary);max-width:65ch;margin:0 auto 1.5rem;position:relative">
          ${KL.quotes[0].text}
        </p>
        <div id="featured-source" style="font-family:var(--font-mono);font-size:.7rem;letter-spacing:.15em;color:var(--gold);text-transform:uppercase">
          — ${KL.quotes[0].source}
        </div>
        <div style="display:flex;gap:.5rem;justify-content:center;margin-top:1.5rem">
          ${KL.quotes.map((_, i) => `<button class="quote-dot" data-idx="${i}" style="width:${i===0?'24':'8'}px;height:8px;border-radius:999px;border:none;background:${i===0?'var(--red)':'var(--bg-tertiary)'};cursor:pointer;transition:all .3s"></button>`).join('')}
        </div>
      </div>

      <!-- Quote grid -->
      <div class="quotes-grid stagger">
        ${KL.quotes.map(quote => `
          <div class="glass-card quote-card">
            <div class="quote-mark">"</div>
            <p class="quote-text">${quote.text}</p>
            <div class="quote-source">— ${quote.source}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Auto-rotating featured quote
  let currentIdx = 0;
  const featuredQuote = page.querySelector('#featured-quote');
  const featuredSource = page.querySelector('#featured-source');
  const dots = page.querySelectorAll('.quote-dot');

  function showQuote(idx) {
    currentIdx = idx;
    if (featuredQuote) {
      featuredQuote.style.opacity = '0';
      setTimeout(() => {
        featuredQuote.textContent = KL.quotes[idx].text;
        featuredQuote.style.opacity = '1';
        featuredQuote.style.transition = 'opacity .4s';
      }, 200);
    }
    if (featuredSource) {
      featuredSource.textContent = `— ${KL.quotes[idx].source}`;
    }
    dots.forEach((dot, i) => {
      dot.style.width = i === idx ? '24px' : '8px';
      dot.style.background = i === idx ? 'var(--red)' : 'var(--bg-tertiary)';
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(autoPlay);
      showQuote(parseInt(dot.getAttribute('data-idx')));
    });
  });

  const autoPlay = setInterval(() => {
    showQuote((currentIdx + 1) % KL.quotes.length);
  }, 5000);
}
