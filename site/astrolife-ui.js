(function () {
  const TWITTER_URL = 'https://x.com/astrolifegame';
  const TWITTER_HANDLE = '@astrolifegame';
  const GITHUB_URL = 'https://github.com/rapkuryer/astrolife';

  // Paste new Solana contract here — UI updates automatically.
  const TOKEN_CONTRACT = '';
  const HAS_CONTRACT = TOKEN_CONTRACT.trim().length > 0;
  const DEXSCREENER_URL = HAS_CONTRACT
    ? `https://dexscreener.com/solana/${TOKEN_CONTRACT.trim()}`
    : '#';

  const ui = document.createElement('div');
  ui.id = 'astrolife-ui';
  ui.innerHTML = `
    <div id="al-ticker">${HAS_CONTRACT ? '$ASTROLIFE' : '$ASTROLIFE soon'}</div>
    <div id="al-contract-ticker" class="contract-ticker" ${HAS_CONTRACT ? '' : 'hidden'}>${TOKEN_CONTRACT}</div>

    <a id="al-btn-dex" class="al-btn${HAS_CONTRACT ? '' : ' is-disabled'}" href="${DEXSCREENER_URL}" ${HAS_CONTRACT ? 'target="_blank" rel="noopener noreferrer"' : ''} aria-label="Dexscreener" title="${HAS_CONTRACT ? 'View on Dexscreener' : 'Dexscreener — coming soon'}">
      <img class="al-dex-icon" src="./textures/dexscreener.png" width="24" height="24" alt="" aria-hidden="true" decoding="async">
    </a>

    <a id="al-btn-github" class="al-btn" href="${GITHUB_URL}" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="AstroLife on GitHub">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.341-3.369-1.341-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0 0 22 12.021C22 6.484 17.523 2 12 2z"/></svg>
    </a>

    <a id="al-btn-twitter" class="al-btn" href="${TWITTER_URL}" target="_blank" rel="noopener noreferrer" aria-label="Twitter" title="Twitter ${TWITTER_HANDLE}">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.37l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    </a>

    <button id="al-btn-info" class="al-btn" type="button" aria-label="Info" title="About AstroLife">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
    </button>

    <div id="al-info-backdrop" aria-hidden="true"></div>
    <aside id="al-info-panel" role="dialog" aria-labelledby="al-info-title" aria-hidden="true">
      <button id="al-info-close" type="button" aria-label="Close">&times;</button>
      <h2 id="al-info-title">ASTROLIFE</h2>
      <div class="tag">Interactive 3D world</div>
      <p>
        Endless grass under the stars. You play as an astronaut — every step reshapes the ground.
        Walk, run, explore. The horizon never ends.
      </p>
      <p class="section-title">What you can do</p>
      <ul>
        <li>Explore an infinite procedural field</li>
        <li>Walk and run with real-time footprint deformation</li>
        <li>Orbit the camera across the starfield</li>
        <li>Listen to ambient grass and atmospheric audio</li>
      </ul>
      <p class="section-title">Tech stack</p>
      <ul>
        <li>React + Three.js (WebGPU / WebGL)</li>
        <li>GLTF animations — idle, walk, run</li>
        <li>KTX2 textures, HDR lighting, VAT roses</li>
        <li>Procedural terrain with live deformation</li>
      </ul>
      <div class="token-line">${HAS_CONTRACT ? '$ASTROLIFE' : '$ASTROLIFE soon'}</div>
      <div id="al-contract-block" class="contract-block" ${HAS_CONTRACT ? '' : 'hidden'}>
        <div class="contract-label-row">Contract address</div>
        <div class="contract-full" id="al-contract-addr">${TOKEN_CONTRACT}</div>
        <button type="button" class="contract-copy-btn" id="al-contract-copy">Copy</button>
      </div>
      <a id="al-info-twitter" href="${TWITTER_URL}" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.37l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        Follow ${TWITTER_HANDLE}
      </a>
      <a id="al-info-github" href="${GITHUB_URL}" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.341-3.369-1.341-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0 0 22 12.021C22 6.484 17.523 2 12 2z"/></svg>
        Docs on GitHub
      </a>
    </aside>
  `;
  document.body.appendChild(ui);

  const backdrop = document.getElementById('al-info-backdrop');
  const panel = document.getElementById('al-info-panel');
  const btnInfo = document.getElementById('al-btn-info');
  const btnClose = document.getElementById('al-info-close');

  function openInfo() {
    backdrop.classList.add('open');
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('al-info-open');
  }

  function closeInfo() {
    backdrop.classList.remove('open');
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('al-info-open');
  }

  btnInfo.addEventListener('click', openInfo);
  btnClose.addEventListener('click', closeInfo);
  backdrop.addEventListener('click', closeInfo);

  document.getElementById('al-btn-dex').addEventListener('click', (e) => {
    if (!HAS_CONTRACT) e.preventDefault();
  });

  const btnContract = document.getElementById('al-contract-copy');
  if (btnContract && HAS_CONTRACT) {
    btnContract.addEventListener('click', async () => {
      const value = TOKEN_CONTRACT.trim();
      try {
        await navigator.clipboard.writeText(value);
        btnContract.textContent = 'Copied!';
        btnContract.classList.add('copied');
        window.setTimeout(() => {
          btnContract.textContent = 'Copy';
          btnContract.classList.remove('copied');
        }, 1600);
      } catch {
        window.prompt('Contract address:', value);
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeInfo();
  });

  const boot = document.createElement('div');
  boot.id = 'al-boot-hint';
  boot.hidden = true;
  document.body.appendChild(boot);

  function gameStatus() {
    const text = document.body.innerText;
    return {
      hasCanvas: !!document.querySelector('canvas'),
      hasIntro: /ASTROLIFE|CALIBRATING|LOADING|START/i.test(text),
      hasProgress: /\d+%/.test(text),
    };
  }

  window.setTimeout(() => {
    const s = gameStatus();
    if (!s.hasCanvas && !s.hasIntro) {
      boot.hidden = false;
      boot.textContent = 'Loading world…';
    }
  }, 12000);

  window.setTimeout(() => {
    const s = gameStatus();
    if (s.hasCanvas || s.hasIntro) {
      boot.remove();
      return;
    }
    boot.hidden = false;
    boot.textContent = 'Still loading assets…';
    boot.classList.remove('error');
  }, 35000);

  window.setTimeout(() => {
    const s = gameStatus();
    if (s.hasCanvas || s.hasIntro) {
      boot.remove();
      return;
    }
    boot.hidden = false;
    boot.classList.add('error');
    boot.innerHTML =
      'Still loading…<br>Check your connection and refresh. If the screen stays black, try disabling browser extensions.';
  }, 70000);
})();
