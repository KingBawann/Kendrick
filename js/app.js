// ============================================================
// app.js — Main Application Router & Lifecycle
// ============================================================

import { renderHome } from './pages/home.js';
import { renderBiography } from './pages/biography.js';
import { renderDiscography } from './pages/discography.js';
import { renderSongs } from './pages/songs.js?v=4';
import { renderAnalysis } from './pages/analysis.js';
import { renderTimeline } from './pages/timeline.js';
import { renderAwards } from './pages/awards.js';
import { renderCollaborations } from './pages/collaborations.js';
import { renderGallery } from './pages/gallery.js';
import { renderQuotes } from './pages/quotes.js';
import { renderFacts } from './pages/facts.js';
import { renderFavorites } from './pages/favorites.js';
import { renderSettings } from './pages/settings.js';

import {
  initCursor, initParticles, initScrollProgress,
  initNavbar, initBackToTop, initLoadingScreen,
  initScrollReveal, initKeyboardShortcuts, applySettings
} from './components.js';

// ── PAGE REGISTRY ───────────────────────────────────────────
const pages = {
  home:           { render: renderHome,           label: 'Home' },
  biography:      { render: renderBiography,      label: 'Biography' },
  discography:    { render: renderDiscography,    label: 'Discography' },
  songs:          { render: renderSongs,          label: 'Songs' },
  analysis:       { render: renderAnalysis,       label: 'Analysis' },
  timeline:       { render: renderTimeline,       label: 'Timeline' },
  awards:         { render: renderAwards,         label: 'Awards' },
  collaborations: { render: renderCollaborations, label: 'Collabs' },
  gallery:        { render: renderGallery,        label: 'Gallery' },
  quotes:         { render: renderQuotes,         label: 'Quotes' },
  facts:          { render: renderFacts,          label: 'Fun Facts' },
  favorites:      { render: renderFavorites,      label: 'Favorites' },
  settings:       { render: renderSettings,       label: 'Settings' }
};

let currentPage = null;

// ── NAVIGATION ──────────────────────────────────────────────
function navigate(pageId) {
  if (!pages[pageId]) { pageId = 'home'; }
  if (currentPage === pageId) return;

  // Hide old page
  const oldEl = currentPage ? document.getElementById(`page-${currentPage}`) : null;
  if (oldEl) {
    oldEl.style.opacity = '0';
    oldEl.style.transform = 'translateY(8px)';
    setTimeout(() => {
      oldEl.classList.remove('active');
      oldEl.style.opacity = '';
      oldEl.style.transform = '';
    }, 200);
  }

  currentPage = pageId;
  window.location.hash = pageId;

  // Update nav
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-nav') === pageId);
  });

  // Show new page
  const el = document.getElementById(`page-${pageId}`);
  if (!el) return;

  // Render page content
  pages[pageId].render();

  // Animate in
  el.classList.add('active');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  });

  // Refresh scroll reveal on new content
  setTimeout(() => {
    window.refreshReveal?.();
    window.refreshCursorTargets?.();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 50);

  // Update document title
  document.title = `${pages[pageId].label} · Kendrick Lamar Fan Site`;
}

// Expose navigate globally for use in page components
window.__navigate = navigate;

// ── APP INIT ─────────────────────────────────────────────────
function init() {
  // Apply saved settings first
  applySettings();

  // Init shared UI components
  initLoadingScreen();
  initCursor();
  initParticles();
  initScrollProgress();
  initNavbar(navigate);
  initBackToTop();
  initScrollReveal();
  initKeyboardShortcuts(navigate);

  // Sidebar Collapse Logic
  const collapseBtn = document.getElementById('nav-collapse-btn');
  collapseBtn?.addEventListener('click', () => {
    document.getElementById('navbar').classList.toggle('collapsed');
    document.getElementById('app').classList.toggle('collapsed');
    document.getElementById('footer').classList.toggle('collapsed');
    
    // Swap title
    if(document.getElementById('navbar').classList.contains('collapsed')) {
      collapseBtn.title = 'Expand Sidebar';
    } else {
      collapseBtn.title = 'Collapse Sidebar';
    }
  });

  // Determine initial page from hash
  const hash = window.location.hash.replace('#', '');
  const startPage = pages[hash] ? hash : 'home';
  navigate(startPage);

  // Handle hash changes (browser back/forward)
  window.addEventListener('hashchange', () => {
    const h = window.location.hash.replace('#', '');
    if (h !== currentPage) navigate(h || 'home');
  });
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
