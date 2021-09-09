 (function () {
      while (queue.length) {
        let edge = queue.shift();
        adj[edge.to].map((next) => {
          if (dist[next.to] > dist[edge.to] + next.weight) {
            dist[next.to] = dist[edge.to] + next.weight;
            queue.push(next);
          }
        });
      }
    })();

    let answer = 0;
    for (let i = 1; i < N + 1; ++i) {
      if (dist[i] <= K) answer++;
    }

    return answer;