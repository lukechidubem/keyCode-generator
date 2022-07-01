'use strict';

const container = document.querySelector('.container');

window.addEventListener('keydown', function (e) {
  container.innerHTML = `<button class="key-code">${
    e.key === ' ' ? 'Space' : e.key
  }<small>Key</small></button>
  <button class="key-code">${e.code}<small>Code</small></button>
  <button class="key-code">${e.keyCode}<small>KeyCode</small></button>`;
});
