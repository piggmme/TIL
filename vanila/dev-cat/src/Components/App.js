import Breadcrumb from './Breadcrumb.js';

import { getNodes } from '../api/getNodes.js';
import Nodes from './Nodes.js';
import ImageViewer from './ImageViewer.js';

export default function App({ $Parent }) {
  this.state = {
    isRoot: false,
    nodes: [],
    depth: [],
    selectedFilePath: null,
  };

  const $breadcrumb = new Breadcrumb({
    $Parent,
    initialState: this.state.depth,
    onClick: async e => {
      console.log('click');
      const { nodeId } = e.target.dataset;
      try {
        const nextNodes = await getNodes(nodeId === 'root' ? null : nodeId);

        let flag = false;
        const nextDepth =
          nodeId === 'root'
            ? []
            : this.state.depth.filter(({ id }) => {
                if (flag === true) return false;
                if (id === nodeId) flag = true;
                return true;
              });
        const isNextNodeRoot = nodeId === 'root';

        this.setState({
          ...this.state,
          isRoot: isNextNodeRoot,
          selectedFilePath: null,
          depth: nextDepth,
          nodes: nextNodes,
        });
      } catch (e) {
        console.error(e.message);
      }
    },
  });

  const $nodes = new Nodes({
    $Parent,
    initialState: {
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    },
    onClick: async node => {
      try {
        if (node.type === 'DIRECTORY') {
          console.log('directory ');
          const nextNodes = await getNodes(node.id);
          this.setState({
            ...this.state,
            isRoot: false,
            selectedFilePath: null,
            depth: [...this.state.depth, node],
            nodes: nextNodes,
          });
        }
        if (node.type === 'FILE') {
          console.log('file');
          this.setState({
            ...this.state,
            selectedFilePath: node.filePath,
          });
        }
      } catch (e) {
        console.error(node.type, e.message);
      }
    },
    handleBack: async () => {
      console.log('back');
      try {
        const isBeforeNodeRoot = this.state.depth.length === 1;
        const beforeNodeId = isBeforeNodeRoot
          ? null
          : this.state.depth[this.state.depth.length - 2].id;
        const beforeNodes = await getNodes(beforeNodeId);
        this.setState({
          ...this.state,
          isRoot: isBeforeNodeRoot,
          selectedFilePath: null,
          depth: this.state.depth.slice(0, this.state.depth.length - 1),
          nodes: beforeNodes,
        });
      } catch (e) {
        console.error(e.message);
      }
    },
  });

  const $imageViewer = new ImageViewer({
    $Parent,
    initialState: this.state.selectedFilePath,
    handleClose: () => {
      console.log('close');
      this.state.selectedFilePath = null;
    },
  });

  this.setState = newState => {
    this.state = newState;
    $breadcrumb.setState(this.state.depth);
    $nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    });
    $imageViewer.setState(this.state.selectedFilePath);
  };

  const init = async () => {
    try {
      const rootNodes = await getNodes();
      this.setState({
        ...this.state,
        isRoot: true,
        nodes: rootNodes,
      });
    } catch (e) {
      console.error(e.message);
    }
  };

  init();
}
