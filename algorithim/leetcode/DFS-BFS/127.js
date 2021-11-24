// 127. Word Ladder
// https://leetcode.com/problems/word-ladder/

// BFS
{
  const ladderLength = (beginWord, endWord, wordList) => {
    if (!wordList.includes(endWord)) return 0;

    let ch = new Map();
    for (const word of wordList) {
      ch.set(word, 0);
    }

    const findNextWords = start => {
      const nextWords = [];
      for (const word of wordList) {
        if (ch.get(word)) continue;
        let cnt = 0;
        for (let i = 0; i < start.length; i++) {
          if (start[i] !== word[i]) cnt++;
        }

        if (cnt === 1) {
          nextWords.push(word);
          ch.set(word, 1);
        }
      }
      return nextWords;
    };

    const queue = [beginWord];
    let L = 1;
    while (queue.length) {
      const len = queue.length;
      for (let i = 0; i < len; i++) {
        const start = queue.shift();
        const nextWords = findNextWords(start);
        if (nextWords.includes(endWord)) return L + 1;
        queue.push(...nextWords);
      }
      L++;
    }
    return 0;
  };

  console.log(
    ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']),
  ); // 5
  console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])); // 0
  console.log(
    ladderLength('che', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']),
  ); // 0
  console.log(ladderLength('a', 'c', ['a', 'b', 'c'])); //2
  console.log(
    ladderLength('hit', 'cog', [
      'hot',
      'cog',
      'dot',
      'dog',
      'hit',
      'lot',
      'log',
    ]),
  ); // 5
}
