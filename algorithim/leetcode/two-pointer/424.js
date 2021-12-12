// 424. Longest Repeating Character Replacement
//https://leetcode.com/problems/longest-repeating-character-replacement/

{
  const characterReplacement = (s, k) => {
    const history = new Map();
    let lt = 0;
    let maxCharCnt = 0;
    let answer = 0;

    for (let rt = 0; rt < s.length; rt++) {
      const char = s[rt];
      history.set(char, history.get(char) + 1 || 1);

      maxCharCnt = Math.max(maxCharCnt, history.get(char));

      while (rt - lt + 1 - maxCharCnt > k) {
        history.set(s[lt], history.get(s[lt]) - 1);
        lt += 1;
      }

      answer = Math.max(answer, rt - lt + 1);
    }

    return answer;
  };
  console.log(characterReplacement('ABCABBCDFER', 2)); // 5
  console.log(characterReplacement('ABBB', 2)); // 4
  console.log(characterReplacement('ABAA', 0)); // 2
  console.log(characterReplacement('ABAB', 2)); // 4
  console.log(characterReplacement('AABABBA', 1)); // 4
  console.log(characterReplacement('AAAA', 2)); // 4
}

{
  const characterReplacement = (s, k) => {
    let left = 0;
    let right = 0;
    let answer = 1;
    let maxCharCount = 0;
    const visited = {};

    while (right < s.length) {
      const char = s[right];
      visited[char] = visited[char] ? visited[char] + 1 : 1;

      if (visited[char] > maxCharCount) maxCharCount = visited[char];

      if (right - left + 1 - maxCharCount > k) {
        visited[s[left]]--;
        left++;
      }

      answer = Math.max(answer, right - left + 1);

      right++;
    }

    return answer;
  };
  //   console.log(characterReplacement('ABCABBCDFER', 2)); // 5
  //   console.log(characterReplacement('ABBB', 2)); // 4
  //   console.log(characterReplacement('ABAA', 0)); // 2
  //   console.log(characterReplacement('ABAB', 2)); // 4
  //   console.log(characterReplacement('AABABBA', 1)); // 4
  //   console.log(characterReplacement('AAAA', 2)); // 4
}
