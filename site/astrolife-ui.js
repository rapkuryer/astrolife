(function () {
  const TWITTER_URL = 'https://x.com/astrolifegame';
  const TWITTER_HANDLE = '@astrolifegame';
  const GITHUB_URL = 'https://github.com/rapkuryer/astrolife';
  const DEXSCREENER_URL = '#'; // link coming soon

  const ui = document.createElement('div');
  ui.id = 'astrolife-ui';
  ui.innerHTML = `
    <div id="al-ticker">$ASTROLIFE soon</div>

    <a id="al-btn-dex" class="al-btn" href="${DEXSCREENER_URL}" aria-label="Dexscreener" title="Dexscreener — coming soon">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.3 4.7C17.2 2.6 14.3 1.5 11.2 1.5 6 1.5 1.7 5.8 1.7 11c0 2.4.9 4.6 2.5 6.3l-1.4 4.5 4.7-1.5c1.5.8 3.2 1.2 4.9 1.2 5.2 0 9.5-4.3 9.5-9.5 0-3.1-1.2-6-3.6-8.3zm-8.1 2.8c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6-1.6-.7-1.6-1.6.7-1.6 1.6-1.6zm5.8 0c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6-1.6-.7-1.6-1.6.7-1.6 1.6-1.6zm-1.2 7.8c-1.3.9-2.9 1.4-4.5 1.4-1.2 0-2.3-.3-3.3-.8 2.5-.3 4.7-1.4 6.4-3 1.1 1 2.5 1.7 4 2.1-.8.2-1.7.3-2.6.3z"/></svg>
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
      <div class="token-line">$ASTROLIFE soon</div>
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
  }

  function closeInfo() {
    backdrop.classList.remove('open');
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
  }

  btnInfo.addEventListener('click', openInfo);
  btnClose.addEventListener('click', closeInfo);
  backdrop.addEventListener('click', closeInfo);
  document.getElementById('al-btn-dex').addEventListener('click', (e) => {
    if (DEXSCREENER_URL === '#') e.preventDefault();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeInfo();
  });

  // Loading hint — only if game stalls (assets are ~60 MB)
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
      'Game needs WebGPU.<br>Use <strong>Chrome</strong> or <strong>Edge</strong> (latest), then refresh.';
  }, 70000);
})();
