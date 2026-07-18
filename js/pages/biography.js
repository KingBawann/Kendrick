// ============================================================
// pages/biography.js
// ============================================================
import { KL } from '../data.js';

export function renderBiography() {
  const page = document.getElementById('page-biography');
  if (!page) return;

  page.innerHTML = `
    <style>
      .bio-spotlight {
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        border-radius: var(--radius-xl);
        overflow: hidden;
        background: var(--bg-card);
        border: 1px solid var(--border);
        box-shadow: var(--shadow-lg);
      }
      .bio-spotlight.reverse {
        grid-template-columns: 0.9fr 1.1fr;
      }
      .bio-spotlight-content {
        padding: var(--space-3xl);
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .bio-spotlight-img {
        height: 100%;
        min-height: 450px;
        background-position: center;
        background-size: cover;
        position: relative;
      }
      .bio-overlay-right { background: linear-gradient(to right, var(--bg-secondary) 0%, transparent 40%); position: absolute; inset: 0; }
      .bio-overlay-left { background: linear-gradient(to left, var(--bg-secondary) 0%, transparent 40%); position: absolute; inset: 0; }
      
      @media (max-width: 900px) {
        .bio-spotlight, .bio-spotlight.reverse {
          grid-template-columns: 1fr;
        }
        .bio-spotlight-img {
          min-height: 300px;
        }
        .bio-spotlight.reverse .bio-spotlight-img {
          grid-row: 1;
        }
        .bio-overlay-right, .bio-overlay-left {
          background: linear-gradient(to bottom, var(--bg-secondary) 0%, transparent 40%);
        }
      }
    </style>

    <div class="container section" style="padding-bottom: 2rem;">
      <div class="section-header reveal">
        <span class="section-label">The Story</span>
        <h1 class="section-title">Biography</h1>
        <p style="color:var(--text-secondary);margin-top:1.5rem;max-width:70ch;font-size:1.1rem;line-height:1.7;">
          From the streets of Compton to the Pulitzer Prize stage — the journey of Kendrick Lamar Duckworth is the story of a visionary who redefined modern music and culture.
        </p>
      </div>
    </div>

    <!-- SPOTLIGHT: GKMC -->
    <div class="container section" style="padding-top: 0; padding-bottom: 2rem;">
      <div class="bio-spotlight reveal">
        <div class="bio-spotlight-content">
          <span class="section-label" style="color:var(--gold);">Chapter I</span>
          <h2 style="font-size:clamp(1.8rem, 3vw, 2.5rem); margin-bottom:1rem; font-weight:900;">A Good Kid in a M.A.A.D City</h2>
          <p style="color:var(--text-secondary); font-size:1rem; line-height:1.8; margin-bottom:1.5rem;">
            Growing up in Compton, Kendrick was surrounded by the harsh realities of gang culture, poverty, and police brutality. Yet, he remained a keen observer — a "good kid" trying to navigate his way through a "m.A.A.d city."
          </p>
          <p style="color:var(--text-secondary); font-size:1rem; line-height:1.8;">
            This duality became the foundation of his major-label debut. Instead of glorifying violence, Kendrick offered a cinematic, deeply personal coming-of-age story. He didn't just rap; he painted vivid pictures of teenage vulnerability, peer pressure, and the desperate search for salvation amidst chaos. It established him as the voice of a generation.
          </p>
        </div>
        <div class="bio-spotlight-img" style="background-image: url('https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/95/92/df/9592df0d-2309-84d4-28b3-3a137e0bd123/12UMGIM53443.rgb.jpg/1000x1000bb.jpg');">
          <div class="bio-overlay-right"></div>
        </div>
      </div>
    </div>

    <!-- SPOTLIGHT: PULITZER -->
    <div class="container section" style="padding-top: 2rem;">
      <div class="bio-spotlight reverse reveal">
        <div class="bio-spotlight-img" style="background-image: url('https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/36/bb/4a/36bb4add-8035-77ee-ecdf-7f93a1059f13/17UMGIM16434.rgb.jpg/1000x1000bb.jpg');">
          <div class="bio-overlay-left"></div>
        </div>
        <div class="bio-spotlight-content">
          <span class="section-label" style="color:var(--red-light);">Chapter II</span>
          <h2 style="font-size:clamp(1.8rem, 3vw, 2.5rem); margin-bottom:1rem; font-weight:900;">Making History: The Pulitzer</h2>
          <p style="color:var(--text-secondary); font-size:1rem; line-height:1.8; margin-bottom:1.5rem;">
            In 2018, Kendrick Lamar shattered a massive cultural ceiling by becoming the first non-classical or jazz musician to win the prestigious <strong>Pulitzer Prize for Music</strong> for his fourth studio album, <em>DAMN.</em>
          </p>
          <p style="color:var(--text-secondary); font-size:1rem; line-height:1.8;">
            The Pulitzer board described the album as "a virtuosic song collection unified by its vernacular authenticity and rhythmic dynamism." It was a monumental validation not just for Kendrick, but for hip-hop as a literary and artistic medium, officially cementing his legacy as one of the most important writers of the 21st century.
          </p>
        </div>
      </div>
    </div>

    <!-- TIMELINE -->
    <div class="container section">
      <div class="section-header reveal" style="text-align:center;">
        <h2 class="section-title">The Complete Timeline</h2>
      </div>
      <div class="timeline-container" style="max-width:800px; margin:0 auto;">
        <div class="timeline-line"></div>
        ${KL.biography.map((item, i) => `
          <div class="timeline-item reveal" style="transition-delay:${Math.min(i * 0.05, 0.5)}s">
            <div class="timeline-dot"></div>
            <div class="timeline-year">${item.year}</div>
            <div class="glass-card timeline-card">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              <div class="timeline-fact">${item.fact}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
