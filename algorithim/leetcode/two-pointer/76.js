// 76. Minimum Window Substring
// https://leetcode.com/problems/minimum-window-substring/

// sol
{
  function minWindow(base, target) {
    let left = 0;
    const map = new Map();
    for (const char of target) {
      map.set(char, (map.get(char) || 0) + 1);
    }
    let zeroCounter = 0;
    let k1;
    let k2;
    let min = Infinity;
    for (let right = 0; right < base.length; right++) {
      console.log(left, right, base[right]);
      const char = base[right];
      if (map.has(char)) {
        const val = map.get(char) - 1;
        map.set(char, val);
        if (val === 0) {
          zeroCounter++;
          while (zeroCounter === map.size) {
            const char = base[left];
            if (map.has(char)) {
              const val = map.get(char) + 1;
              map.set(char, val);
              if (val === 1) {
                zeroCounter--;
                if (right - left < min) {
                  min = right - left + 1;
                  k1 = left;
                  k2 = right;
                }
              }
            }
            left++;
          }
        }
      }
    }
    return base.slice(k1, k2 + 1);
  }
  console.log(minWindow('ADOBECODEBANC', 'ABC')); // BANC
  // console.log(minWindow('a', 'a')); // a
  // console.log(minWindow('a', 'aa'));
  // console.log(minWindow('ab', 'a')); // a
  // console.log(minWindow('ab', 'b')); // b
}

// 내 답안.. 통과못함
{
  // const minWindow = (s, t) => {
  //   const sH = new Map();
  //   [...t].forEach(char => sH.set(char, sH.get(char) + 1 || 1));
  //   let zeroCnt = 0;
  //   let answer = s;
  //   let lt = 0;
  //   for (let rt = 0; rt < s.length; rt++) {
  //     if (sH.has(s[rt])) {
  //       console.log(rt, lt, s[rt]);
  //       const num = sH.get(s[rt]) - 1;
  //       sH.set(s[rt], num);
  //       if (num === 0) {
  //         zeroCnt++;
  //         while (zeroCnt === sH.size) {
  //           if (sH.has(s[lt])) {
  //             const num = sH.get(s[lt]) + 1;
  //             sH.set(s[lt], num);
  //             if (num > 0) zeroCnt--;
  //             answer =
  //               answer.length > s.substring(lt, rt + 1)
  //                 ? s.substring(lt, rt + 1)
  //                 : answer;
  //           }
  //           lt++;
  //         }
  //       }
  //     }
  //   }
  //   return answer;
  // };
  // console.log(minWindow('ADOBECODEBANC', 'ABC')); // BANC
  // console.log(minWindow('a', 'a')); // a
  // console.log(minWindow('a', 'aa'));
  // console.log(minWindow('ab', 'a')); // a
  // console.log(minWindow('ab', 'b')); // b
}

{
  const minWindow = (s, t) => {
    if (s.length < t.length) return '';

    const n = s.length;
    const hash = new Set([...t]);
    const sH = new Map();
    [...t].forEach(char => {
      sH.set(char, sH.get(char) - 1 || -1);
    });
    const nextH = new Map();
    let answer = s;

    const include = new Set([...s]);
    if (![...hash].every(char => include.has(char))) return '';

    let lt = 0;
    let rt = 0;
    while (lt < n && rt < n && lt <= rt) {
      const rightChar = s[rt];
      if (sH.size > 0) {
        if (hash.has(rightChar)) {
          sH.get(rightChar)
            ? sH.set(rightChar, sH.get(rightChar) + 1)
            : nextH.set(rightChar, nextH.get(rightChar) + 1 || 1);
        }
        if (sH.get(rightChar) === 0) {
          sH.delete(rightChar);
        }
        rt++;
      }
      if (sH.size === 0) {
        answer = answer.length > rt - lt ? s.substring(lt, rt) : answer;
        console.log('size === 0 ', s.substring(lt, rt));

        do {
          const leftChar = s[lt];
          if (nextH.has(leftChar)) {
            nextH.set(leftChar, nextH.get(leftChar) - 1);
          } else if (hash.has(leftChar)) {
            sH.set(leftChar, sH.get(leftChar) - 1 || -1);
          }
          if (nextH.get(leftChar) === 0) {
            nextH.delete(leftChar);
          }
          lt++;
        } while (lt < n && !hash.has(s[lt]));
      }
      console.log(lt, rt, sH, nextH);
    }

    return answer;
  };
  // console.log(minWindow('ADOBECODEBANC', 'ABC')); // BANC
  // console.log(minWindow('a', 'a')); // a
  // console.log(minWindow('a', 'aa'));
  // console.log(minWindow('ab', 'a')); // a
  // console.log(minWindow('ab', 'b')); // b
}
