(function () {
  const TWITTER_URL = 'https://x.com/astrolifegame';
  const TWITTER_HANDLE = '@astrolifegame';

  const ui = document.createElement('div');
  ui.id = 'astrolife-ui';
  ui.innerHTML = `
    <div id="al-ticker">$ASTROLIFE soon</div>

    <a id="al-btn-twitter" class="al-btn" href="${TWITTER_URL}" target="_blank" rel="noopener noreferrer" aria-label="Twitter" title="Twitter ${TWITTER_HANDLE}">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.37l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    </a>

    <button id="al-btn-info" class="al-btn" type="button" aria-label="Info" title="About AstroLife">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 4.8a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm1.6 11.2h-3.2v-.8l.4-5.6h2.4l.4 5.6v.8z"/></svg>
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
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeInfo();
  });

  // Show hint if 3D canvas never appears
  const boot = document.createElement('div');
  boot.id = 'al-boot-hint';
  boot.textContent = 'Loading world…';
  document.body.appendChild(boot);

  window.setTimeout(() => {
    const hasCanvas = document.querySelector('canvas');
    const hasStart = document.body.innerText.includes('START');
    if (!hasCanvas && !hasStart) {
      boot.textContent = 'Use Chrome or Edge with WebGPU enabled, then refresh.';
      boot.classList.add('error');
    } else if (hasStart || hasCanvas) {
      boot.remove();
    }
  }, 18000);
})();
