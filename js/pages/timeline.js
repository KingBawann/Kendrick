// ============================================================
// pages/timeline.js — Horizontal Interactive Timeline
// ============================================================

const events = [
  { year: '1987', type: 'birth', label: 'Born in Compton', detail: 'Kendrick Lamar Duckworth is born on June 17, 1987 in Compton, CA.' },
  { year: '2003', type: 'music', label: 'K-Dot Debut', detail: 'First mixtape "Y.H.N.I.C" released under the name K-Dot. Signs with TDE.' },
  { year: '2009', type: 'music', label: 'Overly Dedicated Era', detail: 'Begins recording what becomes Overly Dedicated. Builds underground buzz.' },
  { year: '2011', type: 'album', label: 'Section.80', detail: 'Major label debut. Pitchfork: 9.0. Signs with Dr. Dre\'s Aftermath Entertainment.' },
  { year: '2012', type: 'album', label: 'good kid, m.A.A.d city', detail: '#2 Billboard 200. 5× Platinum. Grammy nomination. Cultural milestone.' },
  { year: '2013', type: 'milestone', label: 'Control Verse', detail: 'Guest verse on Big Sean\'s "Control" sends shockwaves through hip-hop world.' },
  { year: '2015', type: 'album', label: 'To Pimp a Butterfly', detail: '#1 Billboard. 96 Metacritic. Grammy for Best Rap Album. Cultural masterpiece.' },
  { year: '2015', type: 'award', label: 'Grammy Win', detail: 'Best Rap Album for To Pimp a Butterfly. 5 Grammy wins total at ceremony.' },
  { year: '2016', type: 'performance', label: 'Grammy Performance', detail: 'Historic Grammy performance with shackled prisoners, African drums, fire.' },
  { year: '2016', type: 'album', label: 'untitled unmastered.', detail: 'Surprise TPAB outtakes drop. #1 Billboard. Grammy for Best Rap Album (2017).' },
  { year: '2017', type: 'album', label: 'DAMN.', detail: '#1 worldwide. 14 tracks. "HUMBLE." becomes a #1 hit. 5 Grammy wins.' },
  { year: '2018', type: 'award', label: 'Pulitzer Prize 🏆', detail: 'FIRST non-classical/jazz musician to win the Pulitzer Prize for Music. Historic.' },
  { year: '2018', type: 'album', label: 'Black Panther Album', detail: 'Curates Black Panther soundtrack. "All the Stars" gets Oscar nomination.' },
  { year: '2018', type: 'performance', label: 'Coachella Headline', detail: 'Headlines Coachella with NFL players. One of the festival\'s greatest performances.' },
  { year: '2022', type: 'album', label: 'Mr. Morale', detail: 'Returns after 5-year hiatus. Therapy album. #1 worldwide. Grammy nomination.' },
  { year: '2022', type: 'performance', label: 'Glastonbury Headline', detail: 'Only second rapper (after Jay-Z) to headline Glastonbury. Iconic performance.' },
  { year: '2023', type: 'milestone', label: 'Drake Feud Begins', detail: 'Verses exchanged across multiple diss tracks through 2024.' },
  { year: '2024', type: 'milestone', label: 'Not Like Us #1', detail: '"Not Like Us" becomes #1 on Billboard Hot 100. Victory declared.' },
  { year: '2024', type: 'album', label: 'GNX', detail: 'Surprise album released. #1 globally. Breaks streaming records. Critical acclaim.' },
  { year: '2025', type: 'performance', label: 'Super Bowl LIX', detail: 'Headlines Super Bowl halftime show in New Orleans. Widely called greatest ever.' }
];

const typeColors = {
  birth: '#8e44ad', music: '#2980b9', album: '#c0392b',
  award: '#d4af37', milestone: '#27ae60', performance: '#e67e22'
};

export function renderTimeline() {
  const page = document.getElementById('page-timeline');
  if (!page) return;

  page.innerHTML = `
    <div class="section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">Career</span>
          <h1 class="section-title">Interactive Timeline</h1>
          <p style="color:var(--text-secondary);margin-top:.75rem">Drag to scroll · Hover events for details</p>
        </div>
        <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2rem">
          ${Object.entries(typeColors).map(([type, color]) => `
            <div style="display:flex;align-items:center;gap:.5rem;font-size:.75rem;color:var(--text-secondary)">
              <div style="width:10px;height:10px;border-radius:50%;background:${color}"></div>
              <span style="text-transform:capitalize">${type}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="htimeline-container" id="htimeline-container">
        <div class="htimeline-track">
          <div class="htimeline-line"></div>
          ${events.map((ev, i) => `
            <div class="htimeline-item" data-index="${i}">
              ${i % 2 === 0 ? '' : `<div style="height:80px"></div>`}
              <div class="htimeline-dot-wrap">
                <div class="htimeline-dot" style="background:${typeColors[ev.type]};box-shadow:0 0 0 3px ${typeColors[ev.type]}33"></div>
              </div>
              <div class="htimeline-year">${ev.year}</div>
              <div class="htimeline-label">${ev.label}</div>
              ${i % 2 === 0 ? '' : `<div style="height:80px"></div>`}
              <div class="htimeline-card" style="border-color:${typeColors[ev.type]}44">
                <h4>${ev.label}</h4>
                <p style="font-size:.75rem;color:var(--text-secondary);line-height:1.5">${ev.detail}</p>
                <div style="margin-top:.5rem">
                  <span style="font-family:var(--font-mono);font-size:.6rem;padding:2px 8px;border-radius:999px;background:${typeColors[ev.type]}22;color:${typeColors[ev.type]}">
                    ${ev.type}
                  </span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Drag to scroll
  const container = page.querySelector('#htimeline-container');
  if (!container) return;

  let isDragging = false, startX = 0, scrollLeft = 0;

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
  });
  container.addEventListener('mouseup', () => { isDragging = false; container.style.cursor = 'grab'; });
  container.addEventListener('mouseleave', () => { isDragging = false; container.style.cursor = 'grab'; });
  container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  });
}
