// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// 3. Longest Substring Without Repeating Characters

{
  const lengthOfLongestSubstring = s => {
    const substring = new Map();
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
      if (substring.has(s[i])) {
        answer = Math.max(answer, substring.size);

        const idx = substring.get(s[i]);
        for (const [key, val] of [...substring]) {
          if (val <= idx) substring.delete(key);
        }

        substring.set(s[i], i);
      } else {
        substring.set(s[i], i);
      }
    }
    answer = Math.max(answer, substring.size);

    return answer;
  };
  console.log(lengthOfLongestSubstring('abcabcbb'));
  console.log(lengthOfLongestSubstring('bbbbbb'));
  console.log(lengthOfLongestSubstring('pwwkew'));
  console.log(lengthOfLongestSubstring(''));
}
