// 1. 숫자 통일
{
  function solution(s) {
    let one = 0;
    let zero = 0;
    s[0] === '1' ? (one = 1) : (zero = 1);
    for (let i = 1; i < s.length; i++) {
      if (s[i - 1] !== s[i]) {
        s[i] === '1' ? (one += 1) : (zero += 1);
      }
    }
    return Math.min(one, zero);
  }
  //   console.log(solution('100001111'));
  //   console.log(solution('10010111100'));
}

// 2. 상태 변화
{
  function solution(s1, s2) {
    let zero = 0;
    let one = 0;

    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        if (s1[i] === '1') one += 1;
        else zero += 1;
      }
    }
    return Math.min(zero, one) + Math.max(zero, one) - Math.min(zero, one);
  }
  //   console.log(solution('11000111', '11111110')); // 3
}

// 3. 접미사 정렬
{
  function solution(s) {
    let answer = [];
    for (let i = 0; i < s.length; i++) {
      answer.push(s.substring(i, s.length));
    }
    return answer.sort();
  }
  //   console.log(solution('kseaedu'));
}

// 4. 공통문자가 없는 단어
{
  function isUnique(short, long) {
    for (let char of short) {
      if (long.includes(char)) return false;
    }
    return true;
  }
  function solution(words) {
    let answer = 0;

    words.sort((a, b) => a.length - b.length);

    for (let i = 0; i < words.length - 1; i++) {
      for (let j = i + 1; j < words.length; j++) {
        if (isUnique(words[i], words[j])) {
          answer = Math.max(answer, words[i].length * words[j].length);
        }
      }
    }

    return answer;
  }
  //   console.log(solution(['skudy', 'kstue', 'time', 'back', 'good']));
  //   console.log(solution(['kk', 'k', 'kkk', 'kkkkk', 'kkkk']));
}

// 5. 회문문자열2
{
  function solution(s) {
    let lt = 0;
    let rt = s.length - 1;

    while (lt < rt) {
      if (s[lt] === s[rt]) {
        lt++;
        rt--;
        continue;
      }
      let s1 = s.substring(lt, rt);
      let s2 = s.substring(lt + 1, rt + 1);
      if (
        [...s1].reverse().join('') !== s1 &&
        [...s2].reverse().join('') !== s2
      )
        return false;
      else return true;
    }
    return true;
  }
  //   console.log(solution('abcbdcba')); // yes
  //   console.log(solution('abcabbakcba')); // yes
  //   console.log(solution('abcacbakcba')); // no
}

// 6. 학급 회장
{
  function solution(s) {
    let sh = new Map();
    let max = 0;
    let person = '';

    for (let char of s) {
      sh.set(char, sh.get(char) + 1 || 1);
    }
    for (let [key, value] of sh) {
      if (max < value) {
        max = value;
        person = key;
      }
    }
    return person;
  }
  //   console.log(solution('BACBACCACCBDEDE')); // C
}

// 7. 아나그램
{
  function solution(s1, s2) {
    const sH = new Map();

    if (s1.length !== s2.length) return false;

    for (let char of s1) {
      sH.set(char, sH.get(char) + 1 || 1);
    }

    for (let char of s2) {
      if (!sH.has(char) || sH.get(char) === 0) return false;
      sH.set(char, sH.get(char) - 1);
    }
    return true;
  }
  //   console.log(solution('AbaAeCe', 'baeeACA')); // true
  //   console.log(solution('abaCC', 'Caaab')); // false
}

// 8. 문자열 구분하기
{
  function solution(words) {
    let sH = new Set();
    for (let i = 0; i < words[0].length; i++) {
      let flag = true;

      for (let j = 0; j < words.length; j++) {
        const subString = words[j].substring(0, i + 1);
        if (sH.has(subString)) {
          flag = false;
          break;
        }
        sH.add(subString);
      }
      if (flag) return i + 1;
    }
  }
  //   console.log(solution(['seeasue', 'sesseysu', 'semeas'])); // 3
  //   console.log(solution(['ackky', 'kabck', 'yokkcs'])); // 1
  //   console.log(solution(['longlong', 'longtong', 'longbig'])); // 5
}
