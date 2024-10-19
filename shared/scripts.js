addBackToMainLink();
addSaveToGifBehavior();

function addBackToMainLink() {
  const linkElem = document.createElement('a');
  linkElem.href = '/';
  linkElem.textContent = '← Back';
  linkElem.classList.add('back-to-main-link');

  document.body.prepend(document.createElement('hr'));
  document.body.prepend(linkElem);
}

function addSaveToGifBehavior() {
  document.addEventListener('keydown', (event) => {
    if (location.hostname === 'localhost') return;

    if (event.code === 'Slash') {
      frameRate(20);
      saveGif(document.title, 3);
      frameRate(60);
    }
  });
}
