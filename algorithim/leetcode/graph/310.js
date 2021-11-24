// https://leetcode.com/problems/minimum-height-trees/
// 310. Minimum Height Trees
{
  const findMinHeightTrees = (n, edges) => {
    if (n < 2) return [0];
    const graph = [...Array(n)].map(() => []);
    for (const [node1, node2] of edges) {
      graph[node1].push(node2);
      graph[node2].push(node1);
    }

    let leaves = [];
    graph.forEach((node, i) => {
      if (node.length === 1) leaves.push(i);
    });

    let leftedLeavesNum = n;
    while (leftedLeavesNum > 2) {
      leftedLeavesNum -= leaves.length;
      const nextLeaves = [];
      for (const leaf of leaves) {
        const temp = graph[leaf].pop();
        graph[temp] = graph[temp].filter(l => l !== leaf);
        if (graph[temp].length === 1) nextLeaves.push(temp);
      }
      leaves = nextLeaves;
    }

    return leaves;
  };
  //   console.log(
  //     findMinHeightTrees(3, [
  //       [0, 1],
  //       [0, 2],
  //     ]),
  //   );
  //   console.log(
  //     findMinHeightTrees(4, [
  //       [1, 0],
  //       [1, 2],
  //       [1, 3],
  //     ]),
  //   );
  //   console.log(
  //     findMinHeightTrees(6, [
  //       [3, 0],
  //       [3, 1],
  //       [3, 2],
  //       [3, 4],
  //       [5, 4],
  //     ]),
  //   );
  console.log(
    findMinHeightTrees(6, [
      [0, 1],
      [0, 2],
      [0, 3],
      [3, 4],
      [4, 5],
    ]),
  );
  //   console.log(findMinHeightTrees(1, []));
  //   console.log(findMinHeightTrees(2, [[0, 1]]));
}
{
  const findMinHeightTrees = (n, edges) => {
    if (!edges || n < 2) return [0];
    const graph = [...Array(n)].map(() => []);
    // parse edges
    for (let [x, y] of edges) {
      graph[x].push(y);
      graph[y].push(x);
    }

    let leaves = [];
    let leftNodesNum = n;
    // init leaf nodes
    graph.map((pts, i) => pts.length === 1 && leaves.push(i));
    while (leftNodesNum > 2) {
      leftNodesNum = leftNodesNum - leaves.length;
      const nxt_leaves = [];

      for (let leave of leaves) {
        // remove leaf node and itself in related nodes
        const tmp = graph[leave].pop();
        graph[tmp].splice(graph[tmp].indexOf(leave), 1);
        // save new leaf node
        graph[tmp].length === 1 && nxt_leaves.push(tmp);
      }

      leaves = nxt_leaves;
    }
    return leaves;
  };
  //   console.log(
  //     findMinHeightTrees(6, [
  //       [0, 1],
  //       [0, 2],
  //       [0, 3],
  //       [3, 4],
  //       [4, 5],
  //     ]),
  //   );
  //   console.log(
  //     findMinHeightTrees(3, [
  //       [0, 1],
  //       [0, 2],
  //     ]),
  //   );
  //   console.log(
  //     findMinHeightTrees(4, [
  //       [1, 0],
  //       [1, 2],
  //       [1, 3],
  //     ]),
  //   );
  //   console.log(
  //     findMinHeightTrees(6, [
  //       [3, 0],
  //       [3, 1],
  //       [3, 2],
  //       [3, 4],
  //       [5, 4],
  //     ]),
  //   );
  //   console.log(findMinHeightTrees(1, []));
  //   console.log(findMinHeightTrees(2, [[0, 1]]));
}
{
  const findMinHeightTrees = (n, edges) => {
    const graph = [...Array(n)].map(() => []);
    let visited = Array(n).fill(false);
    const nodeHeight = [];
    let minheight = Number.MAX_SAFE_INTEGER;

    for (const [node1, node2] of edges) {
      graph[node1].push(node2);
      graph[node2].push(node1);
    }

    const Q = [];
    let L = 0;
    const BFS = start => {
      Q.push(start);
      visited[start] = true;

      while (Q.length) {
        const len = Q.length;
        for (let i = 0; i < len; i++) {
          const curNode = Q.shift();
          for (const nextNode of graph[curNode]) {
            if (visited[nextNode]) continue;
            visited[nextNode] = true;
            Q.push(nextNode);
          }
        }
        L++;
      }
    };

    for (let node = 0; node < n; node++) {
      if (node.length <= 2) continue;
      BFS(node);
      visited = Array(n).fill(false);
      nodeHeight.push([node, L - 1]);
      minheight = Math.min(minheight, L - 1);
      L = 0;
    }

    return nodeHeight
      .filter(node => node[1] === minheight)
      .map(node => node[0]);
  };
  //   console.log(
  //     findMinHeightTrees(4, [
  //       [1, 0],
  //       [1, 2],
  //       [1, 3],
  //     ]),
  //   );
  //   console.log(
  //     findMinHeightTrees(6, [
  //       [3, 0],
  //       [3, 1],
  //       [3, 2],
  //       [3, 4],
  //       [5, 4],
  //     ]),
  //   );
  //   console.log(findMinHeightTrees(1, []));
  //   console.log(findMinHeightTrees(2, [[0, 1]]));
}
