// ============================================================
// pages/analysis.js — Album Analysis (deep dive per album)
// ============================================================
import { KL } from '../data.js';

const analysisData = {
  'good-kid-maad-city': {
    story: 'good kid, m.A.A.d city tells the story of a single day in young Kendrick\'s life in Compton. The album unfolds like a coming-of-age film, following Kendrick and his friends as they navigate gang pressure, romantic yearning, and the constant threat of violence. Structural elements like "prayer" voicemails from his parents bookend the journey.',
    concept: 'The album is presented as "a short film by Kendrick Lamar" — it is narrative hip-hop at its highest level. Every track flows into the next, characters recur, and a moral arc develops. The concept was heavily influenced by John Singleton\'s Boyz n the Hood.',
    production: 'A diverse palette of producers including Pharrell Williams, Hit-Boy, Dr. Dre, and Sounwave created an intentionally cinematic soundscape. The production shifts between warm soul samples and hard-hitting West Coast beats to mirror the album\'s emotional swings.',
    themes: 'Coming of age, peer pressure, gang culture, faith and salvation, romantic love, the Compton environment as a character itself, the tension between escapism and responsibility.',
    influence: 'GKMC redefined what a mainstream rap album could be narratively. Its success opened doors for concept rap and influenced a generation of storytelling MCs from J. Cole to Cordae.',
    reception: '91 on Metacritic. Named album of the year by Rolling Stone, Pitchfork, NME, and dozens of others. 5× Platinum RIAA certification.',
    awards: 'Grammy nomination — Best Rap Album. BET Hip Hop Award — Album of the Year.',
    palette: ['#5d4037', '#8d6e63', '#d7ccc8', '#263238', '#546e7a'],
    favorites: ['Money Trees', 'Sing About Me', 'Swimming Pools', 'Poetic Justice', 'ADHD']
  },
  'to-pimp-a-butterfly': {
    story: 'TPAB documents Kendrick\'s internal struggle with fame, depression, and racial identity after the success of GKMC. The album follows his transformation from a broken, suicidal young man (on "u") to a defiant, liberated artist (on "i") and finally to a unified voice for his generation ("Mortal Man"). A poem accumulates track by track, ending in an imaginary dialogue with Tupac.',
    concept: 'The album is structured as a poem told over 16 tracks. Each song adds a new stanza, which is read at the end of each track in an evolving spoken word piece. Jazz, funk, soul, and spoken word are woven together with hip-hop to create an entirely new sonic language.',
    production: 'Recorded with a live band led by Thundercat and featuring Flying Lotus, Bilal, George Clinton, and Ronald Isley. The production was deliberately anti-commercial — complex, improvisational, and jazz-influenced. Pharrell contributed "Alright," the album\'s most accessible (and most important) track.',
    themes: 'Black identity and pride, institutional racism, depression and survivor\'s guilt, the corruption of success, the history of Black American music, Africa as spiritual home, the caterpillar/butterfly transformation metaphor.',
    influence: 'TPAB is widely cited as one of the most important and influential albums ever recorded. It revived interest in jazz-influenced hip-hop, inspired the sound of SZA, Blood Orange, and Solange, and became the cultural touchstone of the Black Lives Matter era.',
    reception: '96 on Metacritic. #1 on dozens of "Greatest Albums Ever" lists. Widely considered a masterpiece in any genre.',
    awards: 'Grammy — Best Rap Album. Grammy — Best Rap Song (Alright). Grammy — Best Music Video. 5 Grammy wins total.',
    palette: ['#1a237e', '#283593', '#3949ab', '#b71c1c', '#d4af37'],
    favorites: ['How Much a Dollar Cost', 'Alright', 'u', 'Mortal Man', 'The Blacker the Berry']
  },
  'damn': {
    story: 'DAMN. opens with a parable: Kendrick encounters a blind woman who shoots him. The duality of wickedness and weakness runs through the entire album. Each track explores a different aspect of Kendrick\'s psychology and spirituality. The album can be played in reverse for an alternate narrative.',
    concept: 'The album has two listening experiences. Forward: a narrative of death and rebirth. Backward: a completely different arc. The concept explores free will, duality, and the role of genetics and environment in shaping one\'s destiny.',
    production: 'Mike WiLL Made It, DJ Dahi, 9th Wonder, and Sounwave anchor the production. The sound is more accessible and trap-influenced than TPAB, while maintaining lyrical density. Rihanna appears on "LOYALTY." and U2 features on "XXX."',
    themes: 'Wickedness vs. weakness, pride vs. humility, faith and doubt, black masculinity, media representation, generational curses, American identity.',
    influence: 'DAMN. brought rap to the Pulitzer Prize committee and changed the cultural conversation about hip-hop\'s literary merit. It\'s one of the best-selling rap albums of the 2010s.',
    reception: '95 on Metacritic. 5 Grammy Awards. Pulitzer Prize for Music (2018) — the first non-classical or jazz album to receive the honor.',
    awards: 'Pulitzer Prize for Music. Grammy — Best Rap Album. Grammy — Best Rap Song (HUMBLE.). Grammy — Best Rap Performance. Grammy — Best Music Video (HUMBLE.). Diamond certified.',
    palette: ['#b71c1c', '#c0392b', '#e53935', '#1a1a1a', '#d4af37'],
    favorites: ['HUMBLE.', 'DNA.', 'FEAR.', 'DUCKWORTH.', 'LOVE.']
  },
  'mr-morale': {
    story: 'Mr. Morale & the Big Steppers is Kendrick\'s therapy album — the most personal and confessional work of his career. He examines his own flaws as a father, partner, and artist. The album deals with his relationship with his fiancée Whitney, his daughter, his childhood trauma, and his public responsibility.',
    concept: 'A double album divided into two "steppers" — the external persona (Mr. Morale) and the internal voice. Kendrick uses therapy language throughout, exploring concepts like accountability, projection, and generational healing.',
    production: 'Sounwave, Pharrell, Baby Keem, and DJ Dahi produce a diverse sonic landscape. The album includes orchestral arrangements, soul samples, and trap production. Sampha contributes emotionally on "Father Time."',
    themes: 'Therapy and mental health, generational trauma, toxic masculinity, accountability vs. cancel culture, the limits of celebrity empathy, radical honesty, parenthood.',
    influence: 'Polarized critics and fans who expected a more political album, but its radical honesty about personal failure has aged into a landmark of confessional hip-hop.',
    reception: '90 on Metacritic. Grammy — Best Rap Album (2023). Debuted #1 worldwide.',
    awards: 'Grammy Award — Best Rap Album (2023). Multiple Grammy nominations.',
    palette: ['#3e2723', '#4e342e', '#6d4c41', '#8d6e63', '#d4af37'],
    favorites: ['Father Time', 'N95', 'Count Me Out', 'Mother I Sober', 'Mirror']
  },
  'gnx': {
    story: 'GNX was dropped as a surprise following one of the most culturally significant rap feuds in hip-hop history. It is Kendrick\'s victory lap — a joyful, confident celebration of his Compton roots and his cultural victory over Drake.',
    concept: 'Named after the Buick Grand National Experimental — a car that represented raw American power and Black California culture in the 1980s. The album connects Kendrick\'s music to its West Coast roots while demonstrating his commercial and artistic range.',
    production: 'Sounwave, Jack Antonoff, Mustard, and Kamasi Washington create a diverse palette that bridges jazz, Mustard\'s signature West Coast bounce, and alternative pop elements.',
    themes: 'Victory, love, West Coast identity, legacy, authenticity, joy.',
    influence: 'Immediately heralded as one of the best surprise drops in hip-hop history. Demonstrated Kendrick\'s ability to maintain artistic integrity while achieving massive commercial success.',
    reception: 'Extremely positive. Broke streaming records. Universally praised by critics.',
    awards: 'Debuted #1 globally. Multiple year-end accolades.',
    palette: ['#0d1b2a', '#1b2838', '#243447', '#d4af37', '#c0392b'],
    favorites: ['luther', 'squabble up', 'man at the garden', 'tv off', 'gloria']
  }
};

export function renderAnalysis() {
  const page = document.getElementById('page-analysis');
  if (!page) return;

  // Default to first album with analysis data
  const availableIds = Object.keys(analysisData);
  let currentId = availableIds[1]; // GKMC

  function buildPage(albumId) {
    const album = KL.albums.find(a => a.id === albumId);
    const data = analysisData[albumId];
    if (!album || !data) return '';

    return `
      <div class="container section">
        <div class="section-header reveal">
          <span class="section-label">Deep Dive</span>
          <h1 class="section-title">Album Analysis</h1>
        </div>

        <!-- Album selector -->
        <div class="analysis-nav stagger" id="analysis-nav">
          ${availableIds.map(id => {
            const a = KL.albums.find(al => al.id === id);
            return `<button class="analysis-nav-btn ${id === albumId ? 'active' : ''}" data-analysis-id="${id}">${a ? a.title : id}</button>`;
          }).join('')}
        </div>

        <!-- Analysis content -->
        <div class="analysis-content active" id="analysis-main">
          <div class="analysis-hero">
            ${album.image
              ? `<img class="analysis-album-art" src="${album.image}" alt="${album.title}">`
              : `<div class="analysis-album-art-placeholder">${album.title.charAt(0)}</div>`
            }
            <div>
              <div style="font-family:var(--font-mono);font-size:.7rem;letter-spacing:.15em;color:var(--gold);margin-bottom:.5rem">${album.year} · ${album.tracks} tracks</div>
              <h2 style="margin-bottom:.75rem">${album.title}</h2>
              <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1rem">
                ${album.genres.map(g => `<span class="badge badge-gold">${g}</span>`).join('')}
              </div>
              <p style="font-size:.875rem;color:var(--text-secondary);line-height:1.7;max-width:none">${album.description}</p>
            </div>
          </div>

          <div class="analysis-meta-grid">
            <div class="analysis-meta-item">
              <div class="analysis-meta-label">The Story</div>
              <p class="analysis-meta-value" style="font-size:.83rem;color:var(--text-secondary);line-height:1.7;max-width:none">${data.story}</p>
            </div>
            <div class="analysis-meta-item">
              <div class="analysis-meta-label">Concept</div>
              <p class="analysis-meta-value" style="font-size:.83rem;color:var(--text-secondary);line-height:1.7;max-width:none">${data.concept}</p>
            </div>
            <div class="analysis-meta-item">
              <div class="analysis-meta-label">Production</div>
              <p class="analysis-meta-value" style="font-size:.83rem;color:var(--text-secondary);line-height:1.7;max-width:none">${data.production}</p>
            </div>
            <div class="analysis-meta-item">
              <div class="analysis-meta-label">Themes</div>
              <p class="analysis-meta-value" style="font-size:.83rem;color:var(--text-secondary);line-height:1.7;max-width:none">${data.themes}</p>
            </div>
            <div class="analysis-meta-item">
              <div class="analysis-meta-label">Influence</div>
              <p class="analysis-meta-value" style="font-size:.83rem;color:var(--text-secondary);line-height:1.7;max-width:none">${data.influence}</p>
            </div>
            <div class="analysis-meta-item">
              <div class="analysis-meta-label">Reception & Awards</div>
              <p class="analysis-meta-value" style="font-size:.83rem;color:var(--text-secondary);line-height:1.7;max-width:none">${data.reception}<br><br><em style="color:var(--gold)">${data.awards}</em></p>
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:1.5rem">
            <div class="glass-card" style="padding:1.5rem">
              <div style="font-family:var(--font-mono);font-size:.65rem;letter-spacing:.15em;color:var(--gold);margin-bottom:1rem">Color Palette</div>
              <div class="color-palette">
                ${data.palette.map(c => `
                  <div class="color-swatch" style="background:${c}" title="${c}"></div>
                `).join('')}
              </div>
            </div>
            <div class="glass-card" style="padding:1.5rem">
              <div style="font-family:var(--font-mono);font-size:.65rem;letter-spacing:.15em;color:var(--gold);margin-bottom:1rem">Favorite Tracks</div>
              <ol style="display:flex;flex-direction:column;gap:.5rem;counter-reset:track">
                ${data.favorites.map((t, i) => `
                  <li style="display:flex;gap:.75rem;align-items:center;font-size:.83rem;color:var(--text-secondary)">
                    <span style="font-family:var(--font-mono);color:var(--red-light);font-size:.65rem;width:16px">${String(i+1).padStart(2,'0')}</span>
                    ${t}
                  </li>
                `).join('')}
              </ol>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  page.innerHTML = buildPage(currentId);

  page.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-analysis-id]');
    if (!btn) return;
    const id = btn.getAttribute('data-analysis-id');
    if (id === currentId) return;
    currentId = id;
    page.innerHTML = buildPage(currentId);
  });
}
