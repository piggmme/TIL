(function () {
  'use strict';

  var htmlNode = document.documentElement;
  var logo = document.querySelector('.logo');
  var logoImg = logo.querySelector('img');
  var logoPicSrc = logo.querySelector('picture source');

  (function saveOriginLogoImgSrc() {
    logoImg.dataset.src = logoImg.getAttribute('src');
  })();

  function toggleTheme() {
    htmlNode.classList.toggle('dark');
    logo.classList.toggle('dark');

    if (logo.classList.contains('dark')) {
      logoImg.setAttribute('src', logoPicSrc.getAttribute('srcset'));
    } else {
      logoImg.setAttribute('src', logoImg.dataset.src);
    }
  }

  window.toggleTheme = toggleTheme;

})();