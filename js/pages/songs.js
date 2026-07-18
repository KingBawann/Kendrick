import { KL } from '../data.js?v=4';

export function renderSongs() {
  const root = document.getElementById('page-songs');
  if (!root) return;
  
  root.innerHTML = `
    <div class="page-transition">
      <section class="section">
        <div class="container">
          <div class="section-header reveal">
            <span class="section-label">Top Tracks</span>
            <h2 class="section-title">Iconic Songs</h2>
          </div>
          
          <div class="songs-list stagger">
            ${KL.songs.map((song, index) => `
              <div class="song-card" style="margin-bottom: var(--space-md); padding: var(--space-md); background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border);">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--space-sm);">
                  <div>
                    <h3 style="font-size: 1.25rem; font-family: var(--font-display); color: var(--gold);">${index + 1}. ${song.title}</h3>
                    <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">
                      Album: ${song.album.replace('-', ' ').toUpperCase()} • Released: ${song.year} • Duration: ${song.duration}
                    </div>
                  </div>
                  <div style="background: var(--red); color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: bold;">
                    Popularity: ${song.popularity}/100
                  </div>
                </div>
                <div style="margin-bottom: var(--space-sm);">
                  <span style="font-size: 0.8rem; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px;">Mood:</span> 
                  <span style="color: var(--text-primary); font-size: 0.9rem;">${song.mood}</span>
                </div>
                <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.5; margin-bottom: var(--space-sm);">
                  ${song.analysis}
                </p>
                <div style="font-size: 0.85rem; color: var(--text-muted); font-style: italic;">
                  <strong>Symbolism:</strong> ${song.symbolism}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}
