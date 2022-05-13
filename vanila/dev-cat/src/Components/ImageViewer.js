import { IMG_URL } from '../const/url.js';

export default function ImageViewer({ $Parent, initialState, handleClose }) {
  this.state = initialState;
  this.$imageViewer = document.createElement('div');
  this.$imageViewer.className = 'Modal ImageViewer';

  window.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    this.$imageViewer.style.display = 'none';
    handleClose();
  });

  this.$imageViewer.addEventListener('click', e => {
    if (e.currentTarget !== e.target) return;
    this.$imageViewer.style.display = 'none';
    handleClose();
  });

  $Parent.appendChild(this.$imageViewer);

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$imageViewer.innerHTML = `
        <div class="content" >
            ${this.state ? `<img src="${IMG_URL}${this.state}" />` : ''}
        </div>`;

    this.$imageViewer.style.display = this.state ? 'block' : 'none';
  };

  this.render();
}
