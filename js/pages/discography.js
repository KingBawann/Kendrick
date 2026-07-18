// ============================================================
// pages/discography.js
// ============================================================
import { KL } from '../data.js';
import { openModal } from '../components.js';

export function renderDiscography() {
  const page = document.getElementById('page-discography');
  if (!page) return;

  page.innerHTML = `
    <div class="container section">
      <div class="section-header reveal">
        <span class="section-label">The Music</span>
        <h1 class="section-title">Discography</h1>
        <p style="color:var(--text-secondary);margin-top:1rem">
          Click any album to explore the full tracklist, awards, and critical reception.
        </p>
      </div>
      <div class="albums-grid stagger">
        ${KL.albums.map(album => `
          <div class="album-card" data-album-id="${album.id}" role="button" tabindex="0">
            ${album.image
              ? `<img class="album-card-art" src="${album.image}" alt="${album.title}" loading="lazy">`
              : `<div class="album-card-art-placeholder" style="background:linear-gradient(135deg,${album.color}33,${album.color}11)">${album.title.substring(0,4)}</div>`
            }
            <div class="album-card-body">
              <div class="album-card-year">${album.year}</div>
              <div class="album-card-title">${album.title}</div>
              <div class="album-card-desc">${album.description}</div>
              <div class="album-card-genres">
                ${album.genres.slice(0,3).map(g => `<span class="badge badge-gold">${g}</span>`).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Album modal
  page.querySelectorAll('.album-card').forEach(card => {
    const open = () => {
      const id = card.getAttribute('data-album-id');
      const album = KL.albums.find(a => a.id === id);
      if (!album) return;

      openModal(`
        <div class="modal-album-header">
          ${album.image
            ? `<img class="modal-album-art" src="${album.image}" alt="${album.title}">`
            : `<div class="modal-album-art-placeholder">${album.title.charAt(0)}</div>`
          }
          <div>
            <div style="font-family:var(--font-mono);font-size:.65rem;letter-spacing:.15em;color:var(--gold);margin-bottom:.25rem">${album.year}</div>
            <h2 style="font-size:1.4rem;margin-bottom:.5rem">${album.title}</h2>
            <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1rem">
              ${album.genres.map(g => `<span class="badge badge-gold">${g}</span>`).join('')}
            </div>
            <p style="font-size:.85rem;color:var(--text-secondary);line-height:1.7;max-width:none">${album.description}</p>
          </div>
        </div>

        <div class="modal-section">
          <div class="modal-section-title">Tracklist (${album.tracks} tracks)</div>
          <div class="tracklist">
            ${album.tracklist.map((t, i) => `
              <div class="tracklist-item">
                <span class="track-num">${String(i+1).padStart(2,'0')}</span>
                <span>${t}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="modal-section">
          <div class="modal-section-title">Producers</div>
          <p style="font-size:.85rem;color:var(--text-secondary);max-width:none">${album.producers.join(', ')}</p>
        </div>

        <div class="modal-section">
          <div class="modal-section-title">Awards</div>
          ${album.awards.length
            ? `<ul style="display:flex;flex-direction:column;gap:.25rem">${album.awards.map(a => `<li style="font-size:.82rem;color:var(--text-secondary);padding:.25rem 0;border-bottom:1px solid var(--border);display:flex;gap:.5rem"><span style="color:var(--gold)">🏆</span>${a}</li>`).join('')}</ul>`
            : '<p style="font-size:.82rem;color:var(--text-muted)">No major awards listed for this project.</p>'
          }
        </div>

        <div class="modal-section">
          <div class="modal-section-title">Commercial Performance</div>
          <p style="font-size:.85rem;color:var(--text-secondary);max-width:none">${album.commercial}</p>
        </div>

        <div class="modal-section">
          <div class="modal-section-title">Critical Reception</div>
          <p style="font-size:.85rem;color:var(--text-secondary);max-width:none">${album.critical}</p>
        </div>
      `);
    };
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
  });
}
