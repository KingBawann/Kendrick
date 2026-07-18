// ============================================================
// pages/facts.js — Flip Card Fun Facts
// ============================================================
import { KL } from '../data.js';

export function renderFacts() {
  const page = document.getElementById('page-facts');
  if (!page) return;

  page.innerHTML = `
    <div class="container section">
      <div class="section-header reveal">
        <span class="section-label">Did You Know?</span>
        <h1 class="section-title">Fun Facts</h1>
        <p style="color:var(--text-secondary);margin-top:.75rem">
          Hover or tap any card to reveal the fact. ${KL.facts.length} surprising things about Kendrick Lamar.
        </p>
      </div>

      <div class="facts-grid stagger">
        ${KL.facts.map((item, i) => `
          <div class="fact-card" tabindex="0" role="button" aria-label="Fact ${i+1}: ${item.fact}">
            <div class="fact-card-inner">
              <div class="fact-front">
                <div class="fact-number">${String(i + 1).padStart(2, '0')}</div>
                <div class="fact-front-label">Hover to reveal</div>
                <div style="margin-top:.75rem;font-size:1.5rem">${getCategoryIcon(item.category)}</div>
              </div>
              <div class="fact-back">
                <p class="fact-text">${item.fact}</p>
                <div class="fact-category">${item.category}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Touch support for flip cards
  page.querySelectorAll('.fact-card').forEach(card => {
    card.addEventListener('click', () => {
      card.querySelector('.fact-card-inner').style.transform =
        card.querySelector('.fact-card-inner').style.transform === 'rotateY(180deg)'
          ? '' : 'rotateY(180deg)';
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        card.querySelector('.fact-card-inner').style.transform =
          card.querySelector('.fact-card-inner').style.transform === 'rotateY(180deg)'
            ? '' : 'rotateY(180deg)';
      }
    });
  });
}

function getCategoryIcon(category) {
  const icons = {
    Historic: '📜', Origins: '🌆', Personal: '👤', Childhood: '🏠',
    'Cultural Impact': '🌍', Career: '🎤', Awards: '🏆', Performances: '🎭',
    Values: '💪', Records: '📊', Milestones: '🚀', Process: '🎙️',
    'Behind the Scenes': '🔍'
  };
  return icons[category] || '💡';
}
