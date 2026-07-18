// ============================================================
// pages/gallery.js — Masonry Gallery with Lightbox
// ============================================================
import { KL } from '../data.js';

// Gallery items using album images dynamically
const albumGallery = KL.albums.map(a => ({
  src: a.image,
  label: a.title,
  category: 'Album Art'
}));

const galleryItems = [...albumGallery];

const categories = ['All', ...new Set(galleryItems.map(i => i.category))];

export function renderGallery() {
  const page = document.getElementById('page-gallery');
  if (!page) return;

  let activeCategory = 'All';

  function renderGrid() {
    const filtered = activeCategory === 'All' ? galleryItems : galleryItems.filter(i => i.category === activeCategory);

    return filtered.map((item, idx) => `
      <div class="gallery-item" data-gallery-idx="${idx}" data-src="${item.src || ''}">
        ${item.src
          ? `<img src="${item.src}" alt="${item.label}" loading="lazy">`
          : `<div style="background:${item.gradient};aspect-ratio:${idx % 3 === 0 ? '4/3' : idx % 3 === 1 ? '3/4' : '1/1'};display:flex;align-items:center;justify-content:center;font-size:3rem">${item.icon || '🎵'}</div>`
        }
        <div class="gallery-item-overlay">
          <div>
            <div class="gallery-item-label">${item.label}</div>
            <div style="font-size:.68rem;color:rgba(255,255,255,.5);margin-top:2px">${item.category}</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  page.innerHTML = `
    <div class="container section">
      <div class="section-header reveal">
        <span class="section-label">Visual Legacy</span>
        <h1 class="section-title">Gallery</h1>
        <p style="color:var(--text-secondary);margin-top:.75rem">
          Album artwork, live performances, award ceremonies, and landmark moments.
        </p>
      </div>

      <div class="gallery-filters stagger">
        ${categories.map(cat => `
          <button class="gallery-filter-btn ${cat === 'All' ? 'active' : ''}" data-cat="${cat}">${cat}</button>
        `).join('')}
      </div>

      <div class="gallery-grid" id="gallery-grid">
        ${renderGrid()}
      </div>
    </div>

    <!-- Lightbox -->
    <div class="lightbox" id="lightbox">
      <button class="lightbox-close" id="lightbox-close">✕</button>
      <div id="lightbox-content"></div>
    </div>
  `;

  // Filters
  page.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-cat');
      page.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.toggle('active', b === btn));
      const grid = page.querySelector('#gallery-grid');
      if (grid) {
        grid.style.opacity = '0';
        setTimeout(() => {
          grid.innerHTML = renderGrid();
          grid.style.opacity = '1';
          grid.style.transition = 'opacity 0.3s';
          attachGalleryClicks();
        }, 150);
      }
    });
  });

  attachGalleryClicks();

  // Lightbox
  const lightbox = page.querySelector('#lightbox');
  const lightboxContent = page.querySelector('#lightbox-content');
  const lightboxClose = page.querySelector('#lightbox-close');

  function openLightbox(item) {
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (item.src) {
      lightboxContent.innerHTML = `<img class="lightbox-img" src="${item.src}" alt="${item.label}">`;
    } else {
      lightboxContent.innerHTML = `
        <div style="background:${item.gradient};width:min(600px,90vw);height:min(600px,80vh);border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem">
          <div style="font-size:4rem">${item.icon || '🎵'}</div>
          <div style="font-size:1.2rem;font-weight:700;color:#fff">${item.label}</div>
          <div style="font-size:.8rem;color:rgba(255,255,255,.6)">${item.category}</div>
        </div>`;
    }
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox(); });

  function attachGalleryClicks() {
    page.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const src = item.getAttribute('data-src');
        const idx = galleryItems.findIndex(g => g.src === src || (g.label === item.querySelector('.gallery-item-label')?.textContent));
        const galleryItem = idx !== -1 ? galleryItems[idx] : null;
        if (galleryItem) openLightbox(galleryItem);
      });
    });
  }
}
