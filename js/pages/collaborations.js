// ============================================================
// pages/collaborations.js — SVG Network Graph
// ============================================================
import { KL } from '../data.js';

export function renderCollaborations() {
  const page = document.getElementById('page-collaborations');
  if (!page) return;

  page.innerHTML = `
    <div class="container section">
      <div class="section-header reveal">
        <span class="section-label">The Universe</span>
        <h1 class="section-title">Collaborations</h1>
        <p style="color:var(--text-secondary);margin-top:.75rem">
          Click an artist to explore their collaborative songs with Kendrick.
        </p>
      </div>

      <div class="collab-container">
        <!-- SVG Graph -->
        <div class="collab-graph reveal">
          <svg id="collab-svg" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"></svg>
        </div>

        <!-- Collab List -->
        <div class="collab-list reveal" id="collab-list">
          ${KL.collaborations.map((c, i) => `
            <div class="glass-card collab-card" data-collab-idx="${i}">
              <div class="collab-card-header">
                <div class="collab-avatar" style="background:${c.color}">${c.name.charAt(0)}</div>
                <div>
                  <div class="collab-name">${c.name}</div>
                  <div class="collab-role">${c.role}</div>
                </div>
              </div>
              <div class="collab-songs">
                ${c.songs.map(s => `<span class="collab-song-tag">${s}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Build SVG force-like layout
  const svg = page.querySelector('#collab-svg');
  if (!svg) return;

  const cx = 250, cy = 250;
  const radius = 170;
  const n = KL.collaborations.length;

  // Lines
  KL.collaborations.forEach((c, i) => {
    const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', cx); line.setAttribute('y1', cy);
    line.setAttribute('x2', x); line.setAttribute('y2', y);
    line.setAttribute('class', 'collab-line');
    svg.appendChild(line);
  });

  // Center node (Kendrick)
  const centerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  centerCircle.setAttribute('cx', cx); centerCircle.setAttribute('cy', cy);
  centerCircle.setAttribute('r', 38);
  centerCircle.setAttribute('class', 'collab-center');
  svg.appendChild(centerCircle);

  const centerText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  centerText.setAttribute('x', cx); centerText.setAttribute('y', cy);
  centerText.setAttribute('class', 'collab-label collab-center-label');
  centerText.setAttribute('dy', '-4');
  centerText.textContent = 'KL';
  svg.appendChild(centerText);

  const centerSub = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  centerSub.setAttribute('x', cx); centerSub.setAttribute('y', cy);
  centerSub.setAttribute('class', 'collab-label');
  centerSub.setAttribute('fill', 'rgba(212,175,55,0.8)');
  centerSub.setAttribute('font-size', '9');
  centerSub.setAttribute('dy', '12');
  centerSub.textContent = 'Kendrick';
  svg.appendChild(centerSub);

  // Artist nodes
  KL.collaborations.forEach((c, i) => {
    const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('data-collab-idx', i);
    g.style.cursor = 'pointer';

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x); circle.setAttribute('cy', y);
    circle.setAttribute('r', 20);
    circle.setAttribute('fill', c.color);
    circle.setAttribute('fill-opacity', '0.8');
    circle.setAttribute('stroke', c.color);
    circle.setAttribute('stroke-width', '1.5');
    circle.setAttribute('class', 'collab-node');

    const initial = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    initial.setAttribute('x', x); initial.setAttribute('y', y);
    initial.setAttribute('class', 'collab-label');
    initial.setAttribute('dy', '1');
    initial.setAttribute('fill', '#fff');
    initial.setAttribute('font-weight', '600');
    initial.textContent = c.name.charAt(0);

    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    label.setAttribute('x', x);
    label.setAttribute('y', y + 32);
    label.setAttribute('class', 'collab-label');
    label.textContent = c.name.split(' ')[0];

    g.appendChild(circle); g.appendChild(initial); g.appendChild(label);
    svg.appendChild(g);

    g.addEventListener('click', () => selectCollab(i));
  });

  function selectCollab(idx) {
    page.querySelectorAll('.collab-card').forEach((card, i) => {
      card.classList.toggle('selected', i === idx);
    });
    // Scroll selected into view
    const selected = page.querySelector(`.collab-card[data-collab-idx="${idx}"]`);
    if (selected) selected.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  page.querySelectorAll('.collab-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-collab-idx'));
      selectCollab(idx);
    });
  });
}
