// https://leetcode.com/problems/number-of-operations-to-make-network-connected/
// 1319. Number of Operations to Make Network Connected

{
  var makeConnected = function (n, connections) {
    const unf = Array(n)
      .fill()
      .map((_, i) => i);
    let extra = 0;

    function Find(x) {
      if (unf[x] === x) return x;
      return (unf[x] = Find(unf[x]));
    }
    function Union(a, b) {
      let fa = Find(a);
      let fb = Find(b);
      if (fa !== fb) {
        unf[fa] = fb;
      } else extra++;
    }

    for (const [a, b] of connections) {
      Union(a, b);
    }

    const set = new Set();
    for (let i = 0; i < n; i++) {
      set.add(Find(i));
    }
    const disconnections = set.size - 1;

    return extra >= disconnections ? disconnections : -1;
  };
  console.log(
    makeConnected(4, [
      [0, 1],
      [0, 2],
      [1, 2],
    ]),
  ); // 1
  console.log(
    makeConnected(6, [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 2],
      [1, 3],
    ]),
  ); // 2
  console.log(
    makeConnected(6, [
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 2],
    ]),
  ); // -1
}
