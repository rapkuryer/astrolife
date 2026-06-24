(function () {
  'use strict';

  document.addEventListener(
    'visibilitychange',
    function () {
      document.body.classList.toggle('al-paused', document.hidden);
    },
    false
  );
})();
