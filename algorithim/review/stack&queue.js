// 1. 올바른 괄호
{
  function solution(str) {
    let stack = [];
    for (let char of str) {
      if (char === '(') stack.push(char);
      else {
        if (stack.length === 0) return false;
        stack.pop();
      }
    }
    if (stack.length !== 0) return false;
    return true;
  }
  //   console.log(solution('(()())')); // true
  //   console.log(solution('(()()))')); // NO
  //   console.log(solution('(()(()))(()')); // NO
}
{
  function solution(str) {
    const stack = [];
    for (let x of str) {
      if (x === '(') stack.push(x);
      else {
        if (stack.length) stack.pop();
        else return false;
      }
    }
    if (stack.length) return false;
    return true;
  }
  // console.log(solution('()'));
  // console.log(solution('(()()))'));
  // console.log(solution('(()(()))(()'));
}

// 2. 괄호 문자 제거
{
  function solution(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ')') stack.push(str[i]);
      else while (stack.pop() !== '(');
    }
    return stack.join('');
  }
  //   console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); // EFLM
}
{
  function solution(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ')') {
        stack.push(str[i]);
      } else {
        while (stack.pop() !== '(');
      }
    }
    return stack.join('');
  }
  // console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); // EFLM
}

// 3. 후위식 연산
{
  function solution(s) {
    let stack = [];
    for (let char of s) {
      if (char.match(/[0-9]/)) {
        stack.push(+char);
        continue;
      }
      let rt = stack.pop();
      let lt = stack.pop();

      if (char === '+') stack.push(lt + rt);
      if (char === '-') stack.push(lt - rt);
      if (char === '*') stack.push(lt * rt);
      if (char === '/') stack.push(lt / rt);
    }
    return stack[0];
  }
  //   console.log(solution('352+*9-')); //12
}

// 4. 연속된 문자 지우기
{
  function solution(str) {
    const stack = [];
    for (const char of str) {
      if (stack.length === 0) {
        stack.push(char);
        continue;
      }

      if (stack[stack.length - 1] === char) stack.pop();
      else stack.push(char);
    }
    return stack.join('');
  }
  //   console.log(solution('acbbcaa')); // a
  //   console.log(solution('bacccaba')); // bacaba
}

// 5. 공주 구하기
{
  function solution(n, k) {
    let queue = Array.from({ length: n }, (_, i) => i + 1);

    while (queue.length) {
      for (let i = 0; i < k - 1; i++) queue.push(queue.shift());
      queue.shift();
      if (queue.length === 1) return queue[0];
    }
  }
  //   console.log(solution(8, 3)); // 7
}

// 6. 교육과정 설계
{
  function solution(need, plan) {
    const queue = need.split('');
    for (let char of plan) {
      if (queue.includes(char) && char !== queue.shift()) return false;
    }
    if (queue.length > 0) return false;
    return true;
  }
  //   console.log(solution('CBA', 'CAB')); // false
  //   console.log(solution('CBA', 'CBDAGE')); // true
  //   console.log(solution('CBA', 'CBDBAGE')); // true
  //   console.log(solution('CBA', 'GECBA')); // true
}

// test 최소값 만들기
{
  function solution(nums, k) {
    const stack = [];
    const str = nums + '';

    for (const char of str) {
      while (k > 0 && stack.length && stack[stack.length - 1] > +char) {
        stack.pop();
        k--;
      }
      stack.push(+char);
    }
    return +stack.slice(0, stack.length - k).join('');
  }
  //   console.log(solution(2322113, 3));
}
