(function () {
  'use strict';

  const MAX_DPR = 1.5;
  const nativeDpr = window.devicePixelRatio || 1;

  if (nativeDpr > MAX_DPR) {
    Object.defineProperty(window, 'devicePixelRatio', {
      get: function () {
        return MAX_DPR;
      },
      configurable: true,
    });
  }

  document.addEventListener(
    'visibilitychange',
    function () {
      if (document.hidden) {
        document.body.classList.add('al-paused');
      } else {
        document.body.classList.remove('al-paused');
      }
    },
    false
  );
})();
