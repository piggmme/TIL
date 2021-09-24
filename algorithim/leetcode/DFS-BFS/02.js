// word-ladder
// https://leetcode.com/problems/word-ladder/

// 런타임 에러
{
  var ladderLength = function (beginWord, endWord, wordList) {
    const n = wordList.length;
    let answer = 2,
      flag = false;

    if (!wordList.includes(endWord)) return 0;

    function findWord(target, targetList) {
      const result = [];
      for (const word of targetList) {
        let cnt = 0;
        for (let i = 0; i < target.length; i++) {
          if (target[i] !== word[i]) cnt++;
          if (cnt > 1) break;
        }
        if (cnt === 1) result.push(word);
      }
      return result;
    }
    function BFS() {
      let firstWord = findWord(beginWord, wordList);
      if (firstWord.includes(endWord)) {
        flag = true;
        return answer;
      }

      let queue = [];
      for (let x of firstWord) {
        let ch = Array.from({ length: n }).fill(0);
        ch[wordList.indexOf(x)] = 1;
        queue.push([x, ch.slice()]);
      }

      while (queue.length) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
          let [curWord, ch] = queue.shift();
          const notVisited = wordList.filter((_, i) => ch[i] === 0);
          const possibleWord = findWord(curWord, notVisited);
          for (let w of possibleWord) {
            if (w === endWord) {
              flag = true;
              return ++answer;
            }
            ch[wordList.indexOf(w)] = 1;
            queue.push([w, ch.slice()]);
            ch[wordList.indexOf(w)] = 0;
          }
        }
        answer++;
      }
    }
    BFS();
    return flag ? answer : 0;
  };
  console.log(ladderLength('hit', 'cog', ['hot', 'cog', 'dot', 'dog', 'hit', 'lot', 'log']));
  //   console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); // 5
  //   console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])); // 0
  //   console.log(ladderLength('che', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); // 0
  //   console.log(ladderLength('a', 'c', ['a', 'b', 'c'])); //2
}

// 그냥 BFS 돌리면 됨
{
  var ladderLength = function (beginWord, endWord, wordList) {};

  //   console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); // 5
  //   console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])); // 0
  //   console.log(ladderLength('che', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); // 0
  //   console.log(ladderLength('a', 'c', ['a', 'b', 'c'])); //2
  console.log(ladderLength('hit', 'cog', ['hot', 'cog', 'dot', 'dog', 'hit', 'lot', 'log'])); // 5
}
