// ============================================================
// pages/settings.js — User Preferences
// ============================================================
import { showToast } from '../components.js';

const SETTINGS_KEY = 'kl_settings';

function loadSettings() {
  return JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
}

function saveSettings(settings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function applyAccent(accent) {
  const accents = {
    red: { main: '#c0392b', light: '#e74c3c', dark: '#922b21' },
    gold: { main: '#d4af37', light: '#f4d03f', dark: '#b7950b' },
    blue: { main: '#2980b9', light: '#3498db', dark: '#1a6891' },
    purple: { main: '#8e44ad', light: '#9b59b6', dark: '#6c3483' },
    green: { main: '#16a085', light: '#1abc9c', dark: '#0e6655' }
  };
  const c = accents[accent];
  if (c) {
    const root = document.documentElement;
    root.style.setProperty('--red', c.main);
    root.style.setProperty('--red-light', c.light);
    root.style.setProperty('--red-dark', c.dark);
    root.style.setProperty('--accent', c.main);
    root.style.setProperty('--accent-light', c.light);
  }
}

function applyFontSize(size) {
  document.documentElement.style.fontSize = size + 'px';
}

function applyReduceMotion(reduce) {
  document.body.classList.toggle('reduce-motion', reduce);
}

export function renderSettings() {
  const page = document.getElementById('page-settings');
  if (!page) return;

  const settings = loadSettings();

  page.innerHTML = `
    <div class="container section">
      <div class="section-header reveal">
        <span class="section-label">Preferences</span>
        <h1 class="section-title">Settings</h1>
        <p style="color:var(--text-secondary);margin-top:.75rem">
          Customize your viewing experience. All settings are saved locally.
        </p>
      </div>

      <div class="settings-grid stagger">

        <!-- Appearance -->
        <div class="glass-card settings-card">
          <div class="settings-card-title">🎨 Appearance</div>

          <div class="setting-row">
            <div>
              <div class="setting-label">Dark Mode</div>
              <div class="setting-description">Toggle between dark and light themes</div>
            </div>
            <label class="toggle">
              <input type="checkbox" id="toggle-theme" ${settings.theme === 'light' ? '' : 'checked'}>
              <div class="toggle-track"></div>
            </label>
          </div>

          <div class="setting-row">
            <div>
              <div class="setting-label">Accent Color</div>
              <div class="setting-description">Choose your primary accent color</div>
            </div>
            <div class="color-picker-row">
              ${[
                { id: 'red', color: '#c0392b' },
                { id: 'gold', color: '#d4af37' },
                { id: 'blue', color: '#2980b9' },
                { id: 'purple', color: '#8e44ad' },
                { id: 'green', color: '#16a085' }
              ].map(a => `
                <div class="accent-swatch ${settings.accent === a.id || (!settings.accent && a.id === 'red') ? 'active' : ''}"
                     style="background:${a.color}"
                     data-accent="${a.id}"
                     title="${a.id}"></div>
              `).join('')}
            </div>
          </div>

          <div class="setting-row">
            <div>
              <div class="setting-label">Font Size</div>
              <div class="setting-description">Adjust base font size (14–20px)</div>
            </div>
            <input type="range" class="setting-range" id="font-size-range"
              min="14" max="20" step="1" value="${settings.fontSize || 16}">
          </div>
        </div>

        <!-- Performance -->
        <div class="glass-card settings-card">
          <div class="settings-card-title">⚡ Performance</div>

          <div class="setting-row">
            <div>
              <div class="setting-label">Animations</div>
              <div class="setting-description">Enable page and UI animations</div>
            </div>
            <label class="toggle">
              <input type="checkbox" id="toggle-animations" ${settings.animations === false ? '' : 'checked'}>
              <div class="toggle-track"></div>
            </label>
          </div>

          <div class="setting-row">
            <div>
              <div class="setting-label">Reduce Motion</div>
              <div class="setting-description">Minimize movement for accessibility</div>
            </div>
            <label class="toggle">
              <input type="checkbox" id="toggle-reduce-motion" ${settings.reduceMotion ? 'checked' : ''}>
              <div class="toggle-track"></div>
            </label>
          </div>

          <div class="setting-row">
            <div>
              <div class="setting-label">Particle Background</div>
              <div class="setting-description">Enable the animated particle canvas</div>
            </div>
            <label class="toggle">
              <input type="checkbox" id="toggle-particles" ${settings.particles === false ? '' : 'checked'}>
              <div class="toggle-track"></div>
            </label>
          </div>
        </div>

        <!-- Data -->
        <div class="glass-card settings-card">
          <div class="settings-card-title">💾 Data</div>

          <div class="setting-row">
            <div>
              <div class="setting-label">Clear Favorites</div>
              <div class="setting-description">Remove all saved albums and songs</div>
            </div>
            <button class="btn btn-outline" id="clear-favorites" style="font-size:.75rem;padding:.5rem 1rem">Clear</button>
          </div>

          <div class="setting-row">
            <div>
              <div class="setting-label">Clear Quiz Scores</div>
              <div class="setting-description">Reset the quiz leaderboard</div>
            </div>
            <button class="btn btn-outline" id="clear-scores" style="font-size:.75rem;padding:.5rem 1rem">Clear</button>
          </div>

          <div class="setting-row">
            <div>
              <div class="setting-label">Reset All Settings</div>
              <div class="setting-description">Restore all defaults</div>
            </div>
            <button class="btn btn-outline" id="reset-settings" style="font-size:.75rem;padding:.5rem 1rem;border-color:var(--red);color:var(--red)">Reset</button>
          </div>
        </div>

        <!-- Keyboard shortcuts -->
        <div class="glass-card settings-card">
          <div class="settings-card-title">⌨️ Keyboard Shortcuts</div>
          ${[
            ['Alt+1', 'Home'], ['Alt+2', 'Biography'], ['Alt+3', 'Discography'],
            ['Alt+4', 'Songs'], ['Alt+5', 'Analysis'], ['Alt+6', 'Timeline'],
            ['Alt+7', 'Awards'], ['Alt+8', 'Collaborations'], ['Alt+9', 'Evolution'],
            ['Esc', 'Close Modal'], ['Alt+/', 'Show Shortcuts']
          ].map(([key, action]) => `
            <div class="setting-row">
              <div class="setting-label">${action}</div>
              <code style="font-family:var(--font-mono);font-size:.72rem;background:var(--bg-tertiary);padding:2px 8px;border-radius:4px;border:1px solid var(--border)">${key}</code>
            </div>
          `).join('')}
        </div>

      </div>
    </div>
  `;

  const cfg = loadSettings();

  // Theme toggle
  page.querySelector('#toggle-theme')?.addEventListener('change', (e) => {
    const theme = e.target.checked ? 'dark' : 'light';
    cfg.theme = theme;
    applyTheme(theme);
    saveSettings(cfg);
    showToast(`${theme.charAt(0).toUpperCase() + theme.slice(1)} mode enabled`);
  });

  // Accent swatches
  page.querySelectorAll('.accent-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      page.querySelectorAll('.accent-swatch').forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      const accent = swatch.getAttribute('data-accent');
      cfg.accent = accent;
      applyAccent(accent);
      saveSettings(cfg);
      showToast(`Accent color: ${accent}`);
    });
  });

  // Font size
  page.querySelector('#font-size-range')?.addEventListener('input', (e) => {
    const size = parseInt(e.target.value);
    cfg.fontSize = size;
    applyFontSize(size);
    saveSettings(cfg);
  });

  // Animations toggle
  page.querySelector('#toggle-animations')?.addEventListener('change', (e) => {
    cfg.animations = e.target.checked;
    saveSettings(cfg);
    showToast(e.target.checked ? 'Animations enabled' : 'Animations disabled');
  });

  // Reduce motion
  page.querySelector('#toggle-reduce-motion')?.addEventListener('change', (e) => {
    cfg.reduceMotion = e.target.checked;
    applyReduceMotion(e.target.checked);
    saveSettings(cfg);
  });

  // Particle toggle
  page.querySelector('#toggle-particles')?.addEventListener('change', (e) => {
    cfg.particles = e.target.checked;
    const canvas = document.getElementById('particle-canvas');
    if (canvas) canvas.style.display = e.target.checked ? 'block' : 'none';
    saveSettings(cfg);
  });

  // Data buttons
  page.querySelector('#clear-favorites')?.addEventListener('click', () => {
    localStorage.removeItem('kl_favorites');
    showToast('Favorites cleared', 'success');
  });

  page.querySelector('#clear-scores')?.addEventListener('click', () => {
    localStorage.removeItem('kl_quiz_leaderboard');
    showToast('Quiz scores cleared', 'success');
  });

  page.querySelector('#reset-settings')?.addEventListener('click', () => {
    localStorage.removeItem('kl_settings');
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.style.fontSize = '';
    document.documentElement.style.removeProperty('--red');
    document.documentElement.style.removeProperty('--red-light');
    document.documentElement.style.removeProperty('--red-dark');
    document.documentElement.style.removeProperty('--accent');
    document.body.classList.remove('reduce-motion');
    showToast('Settings reset to defaults', 'success');
    renderSettings();
  });
}
