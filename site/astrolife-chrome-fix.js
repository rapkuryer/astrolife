(function () {
  'use strict';

  var ua = navigator.userAgent;
  var isChrome = /Chrome\//.test(ua) && !/Edg\//.test(ua) && !/OPR\//.test(ua);
  if (!isChrome) return;

  document.documentElement.classList.add('al-chrome');

  function tuneCanvas() {
    document.querySelectorAll('canvas').forEach(function (canvas) {
      if (canvas.width < 64 || canvas.height < 64) return;
      canvas.style.isolation = 'isolate';
      canvas.style.transform = 'translateZ(0)';
    });
  }

  if (document.body) tuneCanvas();
  document.addEventListener('DOMContentLoaded', tuneCanvas);
  new MutationObserver(tuneCanvas).observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
