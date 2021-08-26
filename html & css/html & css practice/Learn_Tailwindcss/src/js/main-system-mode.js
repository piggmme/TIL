(function () {
  'use strict';

  var darkScheme = '(prefers-color-scheme: dark)';
  var isOSDarkMode = window.matchMedia && window.matchMedia(darkScheme).matches;

  var htmlNode = document.documentElement;
  var logo = document.querySelector('.logo');
  var logoImg = logo.querySelector('img');
  var logoPic = logo.querySelector('picture');
  var logoPicSrc = logoPic.querySelector('source');
  var toggleThemeButton = document.querySelector('.toggle-theme-button');

  function init() {
    if (isOSDarkMode) {
      toggleThemeButton.hidden = true;
      htmlNode.classList.add('dark');
    }

    window.matchMedia(darkScheme).addEventListener('change', (e) => {
      const theme = e.matches ? 'dark' : 'light';
      if (theme === 'dark') {
        toggleThemeButton.hidden = true;
        htmlNode.classList.add('dark');
      } else {
        toggleThemeButton.hidden = false;
        htmlNode.classList.remove('dark');
      }
    });

    (function saveOriginLogoImgSrc() {
      logoImg.dataset.src = logoImg.getAttribute('src');
    })();

    toggleThemeButton.addEventListener('click', toggleTheme);
  }

  function toggleTheme() {
    htmlNode.classList.toggle('dark');
    logo.classList.toggle('dark');

    if (logo.classList.contains('dark')) {
      logoImg.setAttribute('src', logoPicSrc.getAttribute('srcset'));
    } else {
      logoImg.setAttribute('src', logoImg.dataset.src);
    }
  }

  init();

  window.toggleTheme = toggleTheme;
})();