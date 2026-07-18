// ============================================================
// pages/quiz.js — Interactive Quiz (Static DOM version)
// ============================================================
import { KL } from '../data.js';
import { showToast } from '../components.js';

const STORAGE_KEY = 'kl_quiz_leaderboard';
const BADGE_THRESHOLDS = [
  { min: 38, badge: '👑 King of Kendrick', desc: 'Almost perfect!' },
  { min: 30, badge: '🔥 Kung Fu Kenny Fan', desc: 'You really know KL!' },
  { min: 20, badge: '🎵 Hip-Hop Enthusiast', desc: 'Solid knowledge!' },
  { min: 10, badge: '📻 Casual Listener', desc: 'Keep exploring!' },
  { min: 0, badge: '🌱 Just Getting Started', desc: 'Keep learning!' }
];

let currentQ = 0;
let score = 0;
let answered = false;
let userAnswers = [];
let quizFinished = false;

function getBadge(s) {
  return BADGE_THRESHOLDS.find(b => s >= b.min) || BADGE_THRESHOLDS[BADGE_THRESHOLDS.length - 1];
}

function saveScore(s, total) {
  const board = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  board.push({ score: s, total: total, date: new Date().toLocaleDateString() });
  board.sort((a, b) => b.score - a.score);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(board.slice(0, 10)));
}

function getLeaderboard() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

export function renderQuiz() {
  const page = document.getElementById('page-quiz');
  if (!page) return;

  const questions = KL.quiz;

  // Mount the basic structure only ONCE
  if (!page.dataset.mounted) {
    page.innerHTML = `
      <div class="container section">
        <div class="section-header" style="margin-bottom:1.5rem">
          <span class="section-label">Test Your Knowledge</span>
          <h1 class="section-title">Kendrick Lamar Quiz</h1>
        </div>

        <div class="quiz-container">
          <!-- Question View -->
          <div id="quiz-view-question" style="display:none;">
            <div class="quiz-progress">
              <div class="quiz-progress-bar">
                <div id="quiz-progress-fill" class="quiz-progress-fill" style="width:0%"></div>
              </div>
              <div id="quiz-counter" class="quiz-counter"></div>
            </div>

            <div class="glass-card quiz-question">
              <div id="quiz-q-text" class="quiz-q-text"></div>
              <div id="quiz-options" class="quiz-options"></div>
            </div>

            <div style="text-align:center;margin-top:1rem">
              <button id="quiz-restart" class="btn btn-outline" style="font-size:.8rem">
                🔄 Restart Quiz
              </button>
            </div>
          </div>

          <!-- Result View -->
          <div id="quiz-view-result" style="display:none;">
            <div class="glass-card quiz-result">
              <div id="quiz-score-circle" class="quiz-score-circle">
                <span id="quiz-score-text" class="quiz-score-text"></span>
              </div>
              <h2 id="quiz-score-pct" style="margin-bottom:.5rem"></h2>
              <div id="quiz-badge" class="quiz-badge"></div>
              <p id="quiz-badge-desc" style="color:var(--text-secondary);font-size:.9rem;margin-top:.75rem"></p>

              <div style="display:flex;gap:1rem;justify-content:center;margin-top:2rem;flex-wrap:wrap">
                <button id="quiz-again" class="btn btn-primary">Play Again</button>
                <button class="btn btn-outline" data-nav="facts">Fun Facts</button>
              </div>
            </div>

            <!-- Answer Breakdown -->
            <div class="glass-card" style="padding:1.5rem;margin-top:2rem;text-align:left;">
              <div style="font-family:var(--font-mono);font-size:.7rem;letter-spacing:.15em;color:var(--gold);margin-bottom:1rem">YOUR ANSWERS</div>
              <div id="quiz-answers-list" style="max-height:400px;overflow-y:auto;padding-right:1rem;"></div>
            </div>

            <!-- Leaderboard -->
            <div class="leaderboard glass-card" style="padding:1.5rem;margin-top:2rem">
              <div style="font-family:var(--font-mono);font-size:.7rem;letter-spacing:.15em;color:var(--gold);margin-bottom:1rem">🏆 LOCAL LEADERBOARD</div>
              <div id="quiz-leaderboard-list"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Bind static event listeners once
    page.querySelector('#quiz-restart')?.addEventListener('click', restartQuiz);
    page.querySelector('#quiz-again')?.addEventListener('click', restartQuiz);
    
    // Bind generic nav links inside quiz (like Fun Facts)
    page.querySelectorAll('[data-nav]').forEach(btn => {
      btn.addEventListener('click', () => window.__navigate && window.__navigate(btn.getAttribute('data-nav')));
    });

    // Event delegation for dynamically created quiz options
    page.querySelector('#quiz-options')?.addEventListener('click', (e) => {
      if (answered || quizFinished) return;
      const btn = e.target.closest('.quiz-option');
      if (!btn) return;
      
      answered = true;
      const selected = parseInt(btn.getAttribute('data-idx'));
      const q = questions[currentQ];
      const isCorrect = selected === q.answer;

      // Style options
      const allBtns = page.querySelectorAll('.quiz-option');
      allBtns.forEach((b, i) => {
        b.disabled = true;
        if (i === q.answer) b.classList.add('correct');
        else if (i === selected && !isCorrect) b.classList.add('wrong');
      });

      userAnswers.push({
        q: q.q,
        selected: q.options[selected],
        correct: q.options[q.answer],
        isCorrect: isCorrect
      });

      if (isCorrect) {
        score++;
        showToast('✓ Correct!', 'success');
      } else {
        showToast(`✗ The answer was: ${q.options[q.answer]}`, 'error');
      }

      setTimeout(() => {
        currentQ++;
        answered = false;
        if (currentQ < questions.length) {
          updateQuestionView();
        } else {
          quizFinished = true;
          saveScore(score, questions.length);
          updateResultView();
        }
      }, 1000);
    });

    page.dataset.mounted = 'true';
  }

  function restartQuiz() {
    currentQ = 0;
    score = 0;
    answered = false;
    userAnswers = [];
    quizFinished = false;
    updateQuestionView();
  }

  function updateQuestionView() {
    const q = questions[currentQ];
    const pct = (currentQ / questions.length) * 100;

    page.querySelector('#quiz-view-result').style.display = 'none';
    page.querySelector('#quiz-view-question').style.display = 'block';

    page.querySelector('#quiz-progress-fill').style.width = pct + '%';
    page.querySelector('#quiz-counter').textContent = \`Question \${currentQ + 1} of \${questions.length} · Score: \${score}\`;
    
    // Add brief fade animation to text
    const qText = page.querySelector('#quiz-q-text');
    qText.textContent = q.q;
    
    // Render options
    const optionsContainer = page.querySelector('#quiz-options');
    optionsContainer.innerHTML = q.options.map((opt, i) => `
      <button class="quiz-option" data-idx="${i}">${opt}</button>
    `).join('');

    // Force aggressive reflow/repaint to bypass WebKit/Chromium rendering bugs
    const viewQ = page.querySelector('#quiz-view-question');
    viewQ.style.display = 'none';
    viewQ.offsetHeight; // Force reflow
    viewQ.style.display = 'block';
    
    // Ensure visibility is forced on the container level
    const gc = page.querySelector('.quiz-question');
    if (gc) {
      gc.style.opacity = '1';
      gc.style.visibility = 'visible';
      gc.style.transform = 'translateZ(0)'; // Force hardware acceleration layer
    }
  }

  function updateResultView() {
    page.querySelector('#quiz-view-question').style.display = 'none';
    page.querySelector('#quiz-view-result').style.display = 'block';

    const badge = getBadge(score);
    const pct = Math.round((score / questions.length) * 100);
    const leaderboard = getLeaderboard();

    const circle = page.querySelector('#quiz-score-circle');
    circle.style.setProperty('--score-pct', \`\${pct * 3.6}deg\`);
    page.querySelector('#quiz-score-text').textContent = \`\${score}/\${questions.length}\`;
    page.querySelector('#quiz-score-pct').textContent = \`\${pct}%\`;
    page.querySelector('#quiz-badge').textContent = badge.badge;
    page.querySelector('#quiz-badge-desc').textContent = badge.desc;

    page.querySelector('#quiz-answers-list').innerHTML = userAnswers.map((ans, i) => \`
      <div style="padding:.75rem 0; border-bottom:1px solid var(--border); display:flex; flex-direction:column; gap:6px;">
        <div style="font-weight:600; font-size:.9rem; line-height:1.4;">\${i+1}. \${ans.q}</div>
        <div style="font-size:.85rem; color:\${ans.isCorrect ? '#2ecc71' : '#e74c3c'};">
          \${ans.isCorrect ? '✓' : '✗'} Your answer: \${ans.selected}
        </div>
        \${!ans.isCorrect ? \`<div style="font-size:.85rem; color:var(--text-muted);">Correct answer: \${ans.correct}</div>\` : ''}
      </div>
    \`).join('');

    page.querySelector('#quiz-leaderboard-list').innerHTML = leaderboard.length === 0
      ? '<p style="color:var(--text-muted);font-size:.85rem;text-align:center">No scores yet. Be the first!</p>'
      : leaderboard.map((entry, i) => \`
        <div class="leaderboard-item">
          <span class="leaderboard-rank">\${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : \`#\${i+1}\`}</span>
          <span style="flex:1;font-size:.85rem">\${getBadge(entry.score).badge}</span>
          <span style="font-size:.75rem;color:var(--text-muted)">\${entry.date}</span>
          <span class="leaderboard-score">\${entry.score}/\${entry.total}</span>
        </div>
      \`).join('');
  }

  if (quizFinished) {
    updateResultView();
  } else {
    updateQuestionView();
  }
}


