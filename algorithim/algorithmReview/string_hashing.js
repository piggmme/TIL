// 1. 숫자 통일
{
  function solution(s) {
    let one = 0;
    let zero = 0;
    s[0] === '1' ? (one = 1) : (zero = 1);
    for (let i = 1; i < s.length; i++) {
      if (s[i - 1] !== s[i]) s[i] === '1' ? (one += 1) : (zero += 1);
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
  // console.log(solution('11000111', '11111110')); // 3
}

// 3. 접미사 정렬
{
  // String.prototype.substring(startIndex, endIndex)
  // substring() 메소드는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환합니다.
  function solution(s) {
    let answer = [];
    for (let i = 0; i < s.length; i++) {
      answer.push(s.substring(i, s.length));
    }
    return answer.sort();
  }
  // console.log(solution('kseaedu'));
}

// 4. 공통문자가 없는 단어
{
  function isUnique(short, long) {
    for (let x of short) {
      if (long.includes(x)) return false;
    }
    return true;
  }
  function solution(words) {
    let answer = 0;
    let len = words.length;
    words.sort((a, b) => a.length - b.length);
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (isUnique(words[i], words[j])) {
          let tmp = words[i].length * words[j].length;
          answer = Math.max(answer, tmp);
        }
      }
    }
    return answer;
  }
  // console.log(solution(['skudy', 'kstue', 'time', 'back', 'good'])); // 20
}

// 5. 회문 문자열2
{
  function solution(s) {
    let lt = 0;
    let rt = s.length - 1;

    while (lt < rt) {
      if (s[lt] !== s[rt]) {
        const s1 = s.substring(lt, rt);
        const s2 = s.substring(lt + 1, rt + 1);
        if ([...s1].reverse().join('') !== s1 && [...s2].reverse().join('')) return 'NO';
        else return 'YES';
      } else {
        lt += 1;
        rt -= 1;
      }
    }
    return 'YES';
  }
  // console.log(solution('abcbdcba'));
  // console.log(solution('abcabbakcba'));
  // console.log(solution('abcacbakcba'));
}

// 6. 학급 회장
{
  function solution(s) {
    let sh = new Map();
    let max = 0;
    let person;
    for (let x of s) {
      sh.set(x, sh.get(x) + 1 || 1);
    }
    for (let [key, value] of sh) {
      if (max < value) {
        max = value;
        person = key;
      }
    }
    return person;
  }
  // console.log(solution('BACBACCACCBDEDE')); // C
}

// 7. 아나그램
{
  function solution(s1, s2) {
    let answer = 'YES';
    let sH = new Map();

    if (s1.length !== s2.length) return 'NO';

    for (let x of s1) {
      sH.set(x, sH.get(x) + 1 || 1);
    }
    for (let x of s2) {
      if (!sH.has(x) || sH.get(x) === 0) return 'NO';
      sH.set(x, sH.get(x) - 1);
    }
    return answer;
  }
  // console.log(solution('AbaAeCe', 'baeeACA')); // YES
  // console.log(solution('abaCC', 'Caaab')); // NO
}

// 8. 문자열 구분하기
{
  function solution(words) {
    let cnt = 1;
    for (let i = 0; i < words[0].length; i++) {
      for (let j = 1; j < words.length; j++) {
        if (words[0][i] !== words[j][i]) return cnt;
      }
      cnt += 1;
    }
    return cnt;
  }
  // console.log(solution(['seeasue', 'sesseysu', 'semeas']));
  // console.log(solution(['ackky', 'kabck', 'yokkcs']));
  // console.log(solution(['longlong', 'longtong', 'longbig']));
}
