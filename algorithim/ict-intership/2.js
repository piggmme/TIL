{
  function getSubstringCount(s) {
    for (let i = 0; i < s.length - 1; i++) {}
  }
  //   console.log(getSubstringCount('011001')); // 4
  // console.log(getSubstringCount('001100011')); // 6
}

{
  function getSubstringCount(s) {
    let result = 0;
    for (let lt = 0; lt < s.length - 1; lt++) {
      let first = 0;
      let second = 0;
      let rt = lt;
      while (s[lt] === s[rt]) {
        rt += 1;
        first += 1;
      }
      while (rt < s.length && first > second && s[lt + first] === s[rt]) {
        rt += 1;
        second += 1;
      }

      if (first === second) {
        result += 1;
        // result += first;
        // lt += first - 1;
      }
    }
    return result;
  }
  console.log(getSubstringCount('011001')); // 4
  console.log(getSubstringCount('001100011')); // 6
}
