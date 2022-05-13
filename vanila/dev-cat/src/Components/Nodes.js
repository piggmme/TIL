export default function Nodes({ $Parent, initialState, onClick, handleBack }) {
  this.state = initialState;
  this.onClick = onClick;
  this.handleBack = handleBack;

  this.$Ul = document.createElement('ul');
  this.$Ul.className = 'Nodes';
  $Parent.appendChild(this.$Ul);

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!this.state.nodes) return;

    const $nodeList = this.state.nodes
      .map(({ id, name, type }) => {
        const iconPath =
          type === 'FILE' ? './assets/file.png' : './assets/directory.png';

        return `
                <li class="Node" data-node-id="${id}" >
                    <img src="${iconPath}" alt="${name}" />
                    <div>${name}</div>
                </li>
                `;
      })
      .join('');

    this.$Ul.innerHTML = !this.state.isRoot
      ? `<div class="Node">
                <img src="/assets/prev.png" alt="뒤로가기" />
            </div>
            ${$nodeList}`
      : $nodeList;

    this.$Ul.querySelectorAll('.Node').forEach($node => {
      $node.addEventListener('click', e => {
        const { nodeId } = e.target.closest('.Node').dataset;
        if (!nodeId) this.handleBack(); // 뒤로가기

        const selectedNode = this.state.nodes.find(node => node.id === nodeId);
        if (selectedNode) this.onClick(selectedNode);
      });
    });
  };
}
