// ============================================================
// pages/favorites.js — Local Storage Favorites Manager
// ============================================================
import { KL } from '../data.js';
import { showToast } from '../components.js';

const FAV_KEY = 'kl_favorites';

export function getFavorites() {
  return JSON.parse(localStorage.getItem(FAV_KEY) || '{"albums":[],"songs":[]}');
}

export function toggleFavorite(type, id) {
  const favs = getFavorites();
  const list = favs[type] || [];
  const idx = list.indexOf(id);
  if (idx === -1) {
    list.push(id);
    showToast(`Added to favorites ❤️`, 'success');
  } else {
    list.splice(idx, 1);
    showToast('Removed from favorites');
  }
  favs[type] = list;
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  return idx === -1;
}

export function isFavorite(type, id) {
  const favs = getFavorites();
  return (favs[type] || []).includes(id);
}

export function renderFavorites() {
  const page = document.getElementById('page-favorites');
  if (!page) return;

  let activeTab = 'albums';

  function render() {
    const favs = getFavorites();
    const favAlbums = KL.albums.filter(a => (favs.albums || []).includes(a.id));
    const favSongs = KL.songs.filter(s => (favs.songs || []).includes(s.id));

    const current = activeTab === 'albums' ? favAlbums : favSongs;

    page.innerHTML = `
      <div class="container section">
        <div class="section-header reveal">
          <span class="section-label">Your Collection</span>
          <h1 class="section-title">Favorites</h1>
          <p style="color:var(--text-secondary);margin-top:.75rem">
            Save albums and songs you love. Stored locally in your browser.
          </p>
        </div>

        <div class="favorites-tabs">
          <button class="fav-tab ${activeTab === 'albums' ? 'active' : ''}" id="tab-albums">
            💿 Albums (${favAlbums.length})
          </button>
          <button class="fav-tab ${activeTab === 'songs' ? 'active' : ''}" id="tab-songs">
            🎵 Songs (${favSongs.length})
          </button>
        </div>

        ${current.length === 0 ? `
          <div class="empty-state">
            <div class="empty-state-icon">${activeTab === 'albums' ? '💿' : '🎵'}</div>
            <h3 style="margin-bottom:.5rem">No ${activeTab} saved yet</h3>
            <p style="font-size:.85rem;color:var(--text-muted);max-width:40ch;margin:0 auto .75rem">
              Go to the ${activeTab === 'albums' ? 'Discography' : 'Song Explorer'} and click the ❤️ on any ${activeTab === 'albums' ? 'album' : 'song'} to add it here.
            </p>
            <button class="btn btn-primary" data-nav="${activeTab === 'albums' ? 'discography' : 'songs'}">
              Browse ${activeTab === 'albums' ? 'Albums' : 'Songs'}
            </button>
          </div>
        ` : `
          <div class="fav-grid stagger">
            ${current.map(item => {
              const isAlbum = activeTab === 'albums';
              return `
                <div class="fav-item">
                  ${isAlbum
                    ? (item.image
                        ? `<img src="${item.image}" alt="${item.title}">`
                        : `<div class="fav-item-art" style="background:${item.color}33">${item.title.charAt(0)}</div>`)
                    : `<div class="fav-item-art" style="background:linear-gradient(135deg,var(--red),var(--gold))">${item.title.charAt(0)}</div>`
                  }
                  <div class="fav-item-body">
                    <div>
                      <div class="fav-item-title">${item.title}</div>
                      <div style="font-size:.7rem;color:var(--text-muted)">${item.year}</div>
                    </div>
                    <button class="fav-heart" data-type="${activeTab === 'albums' ? 'albums' : 'songs'}" data-id="${item.id}" title="Remove from favorites">❤️</button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `}

        <!-- Add favorites from browse -->
        <div style="margin-top:4rem">
          <div style="font-family:var(--font-mono);font-size:.7rem;letter-spacing:.15em;color:var(--gold);margin-bottom:1.5rem">QUICK ADD — ${activeTab === 'albums' ? 'ALBUMS' : 'SONGS'}</div>
          <div class="fav-grid stagger">
            ${(activeTab === 'albums' ? KL.albums : KL.songs).map(item => {
              const isFav = (favs[activeTab] || []).includes(item.id);
              const albumObj = activeTab === 'songs' ? KL.albums.find(a => a.id === item.album) : null;
              return `
                <div class="fav-item" style="${isFav ? 'border-color:var(--red)' : ''}">
                  ${activeTab === 'albums'
                    ? (item.image
                        ? `<img src="${item.image}" alt="${item.title}">`
                        : `<div class="fav-item-art" style="background:${item.color}33">${item.title.charAt(0)}</div>`)
                    : `<div class="fav-item-art" style="background:${albumObj ? albumObj.color : '#333'}33">${item.title.charAt(0)}</div>`
                  }
                  <div class="fav-item-body">
                    <div>
                      <div class="fav-item-title" style="font-size:.82rem">${item.title}</div>
                      <div style="font-size:.68rem;color:var(--text-muted)">${item.year}</div>
                    </div>
                    <button class="fav-heart" data-type="${activeTab}" data-id="${item.id}" title="${isFav ? 'Remove' : 'Add to'} favorites">
                      ${isFav ? '❤️' : '🤍'}
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    // Tabs
    page.querySelector('#tab-albums')?.addEventListener('click', () => { activeTab = 'albums'; render(); });
    page.querySelector('#tab-songs')?.addEventListener('click', () => { activeTab = 'songs'; render(); });

    // Heart buttons
    page.querySelectorAll('.fav-heart').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        const id = btn.getAttribute('data-id');
        toggleFavorite(type, id);
        render();
      });
    });

    // Nav buttons
    page.querySelectorAll('[data-nav]').forEach(btn => {
      btn.addEventListener('click', () => window.__navigate(btn.getAttribute('data-nav')));
    });
  }

  render();
}
