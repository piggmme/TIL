// 3 => 플로이드 워셜
// https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/submissions/
// There are n cities numbered from 0 to n-1. Given the array edges where edges[i] = [fromi, toi, weighti] represents a bidirectional and weighted edge between cities fromi and toi, and given the integer distanceThreshold.

// Return the city with the smallest number of cities that are reachable through some path and whose distance is at most distanceThreshold, If there are multiple such cities, return the city with the greatest number.

// Notice that the distance of a path connecting cities i and j is equal to the sum of the edges' weights along that path.

{
  //function solution(n, edges, distanceThreshold) {
  //   const cities = [...Array(n)].map(() => new Set());
  //   const graph = [...Array(n)].map(() => []);
  //   for (const [from, to, weight] of edges) {
  //     graph[from].push([to, weight]);
  //     graph[to].push([from, weight]);
  //   }
  //   let ch = Array(n).fill(0);
  //   function DFS(start, node, distance) {
  //     if (distance >= distanceThreshold) {
  //       ch[node] = 0;
  //       return;
  //     }
  //     for (const [next, weight] of graph[node]) {
  //       if (!ch[next]) {
  //         ch[next] = 1;
  //         if (distance + weight <= distanceThreshold) cities[start].add(next);
  //         DFS(start, next, distance + weight);
  //       }
  //     }
  //   }
  //   let min = Number.MAX_SAFE_INTEGER;
  //   for (let i = 0; i < n; i++) {
  //     ch = Array(n).fill(0);
  //     ch[i] = 1;
  //     DFS(i, i, 0, 0);
  //     if (cities[i].size < min) min = cities[i].size;
  //   }
  //   for (let i = n - 1; i >= 0; i--) {
  //     if (cities[i].size === min) return i;
  //   }
  // }
}

function findTheCity(n, edges, distanceThreshold) {
  const costs = [...Array(n)].map(() => Array(n).fill(Number.MAX_SAFE_INTEGER));

  for (let i = 0; i < n; i++) costs[i][i] = 0;

  for (const [from, to, weight] of edges) {
    costs[from][to] = weight;
    costs[to][from] = weight;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        costs[i][j] = Math.min(costs[i][j], costs[i][k] + costs[k][j]);
      }
    }
  }

  const candidates = costs.map(
    cost =>
      cost.filter(weight => weight <= distanceThreshold && weight !== 0).length,
  );

  const min = Math.min(...candidates);

  for (let i = n - 1; i >= 0; i--) if (min === candidates[i]) return i;
}
console.log(
  findTheCity(
    4,
    [
      [0, 1, 3],
      [1, 2, 1],
      [1, 3, 4],
      [2, 3, 1],
    ],
    4,
  ),
); // 3
console.log(
  findTheCity(
    5,
    [
      [0, 1, 2],
      [0, 4, 8],
      [1, 2, 3],
      [1, 4, 2],
      [2, 3, 1],
      [3, 4, 1],
    ],
    2,
  ),
); // 0
