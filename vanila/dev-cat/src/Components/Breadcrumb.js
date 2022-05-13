export default function Breadcrumb({ $Parent, initialState, onClick }) {
  this.state = initialState;
  this.onClick = onClick;

  this.$element = document.createElement('nav');
  this.$element.className = 'Breadcrumb';

  $Parent.appendChild(this.$element);

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = `
            <div data-node-id="root">root</div>
            ${this.state
              .map(
                (node, index) =>
                  `<div data-node-id="${node.id}" >${node.name}</div>`,
              )
              .join('')}
        `;
    this.$element.addEventListener('click', onClick);
  };
}
