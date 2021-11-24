// 1529. Bulb Switcher IV
{
  // greedy
  const minFlips = target => {
    let answer = +target[0];
    for (let i = 1; i < target.length; i++) {
      if (target[i - 1] !== target[i]) answer += 1;
    }
    return answer;
  };
  console.log(minFlips('10111'));
}
{
  // BFS => Time limit!!
  const minFlips = target => {
    let bulbs = '0'.repeat(target.length);

    if (target === bulbs) return 0;

    const BFS = () => {
      const queue = [bulbs];
      let L = 0;
      while (queue.length) {
        const len = queue.length;
        for (let j = 0; j < len; j++) {
          const temp = queue.shift();
          for (let i = 0; i < bulbs.length; i++) {
            const fliped = [...temp.slice(i)]
              .map(bulb => (bulb === '0' ? '1' : '0'))
              .join('');
            queue.push(temp.slice(0, i) + fliped);
            // console.log(temp.slice(0, i) + fliped);
            if (temp.slice(0, i) + fliped === target) return L + 1;
          }
        }
        L += 1;
      }
    };

    return BFS();
  };
  //   console.log(minFlips('10111'));
}
