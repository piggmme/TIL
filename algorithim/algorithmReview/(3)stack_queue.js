// 다시 볼 문제 : (7). 최소 매출

// 1. 올바른 괄호
{
  function solution(str) {
    let stack = [];
    for (let x of str) {
      if (x === '(') stack.push(x);
      else {
        if (stack.length === 0) return false;
        stack.pop();
      }
    }
    if (stack.length !== 0) return false;
    return true;
  }
  //   console.log(solution('(()()))')); // NO
  //   console.log(solution('(()(()))(()')); // NO
}

// 2. 괄호 문자 제거
{
  function solution(str) {
    let stack = [];
    for (let x of str) {
      if (x !== ')') stack.push(x);
      else {
        while (stack.pop() !== '(');
      }
    }
    return stack.join('');
  }
  //   console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); // EFLM
}

// 3. 후위식 연산
{
  function solution(s) {
    let stack = [];
    for (let x of s) {
      if (!isNaN(x)) stack.push(x * 1);
      else {
        const rt = stack.pop();
        const lt = stack.pop();
        if (x === '+') stack.push(lt + rt);
        else if (x === '-') stack.push(lt - rt);
        else if (x === '*') stack.push(lt * rt);
        else if (x === '/') stack.push(lt / rt);
      }
    }
    return stack[0];
  }
  //   console.log(solution('352+*9-'));
}

// 4. 연속된 문자 지우기
{
  function solution(str) {
    let stack = [];
    for (let x of str) {
      if (stack.length === 0) stack.push(x);
      else {
        if (stack[stack.length - 1] === x) stack.pop();
        else stack.push(x);
      }
    }
    return stack.join('');
  }
  //   console.log(solution('acbbcaa')); // a
  //   console.log(solution('bacccaba')); // bacaba
}

// 5. 공주 구하기
{
  function solution(n, k) {
    const queue = Array.from({ length: n }, (_, i) => i + 1);
    while (queue.length) {
      for (let i = 0; i < k - 1; i++) {
        queue.push(queue.shift());
      }
      queue.shift();
      if (queue.length === 1) return queue[0];
    }
  }
  //   console.log(solution(8, 3)); // 7
}

// 6. 교육과정 설계
{
  function solution(need, plan) {
    const queue = [...need];
    for (let x of plan) {
      if (queue.includes(x)) {
        if (x !== queue.shift()) return false;
      }
    }
    if (queue.length > 0) return false;
    return true;
  }
  //   console.log(solution('CBA', 'CAB'));
  //   console.log(solution('CBA', 'CBDAGE'));
  //   console.log(solution('CBA', 'CBDBAGE'));
  //   console.log(solution('CBA', 'GECBA'));
}

// 7. 최소 매출
{
  function solution(nums, k) {
    const answer = [];
    const deque = [];
    for (let i = 0; i < k - 1; i++) {
      while (deque.length > 0 && deque[deque.length - 1][0] > nums[i]) deque.pop();
      deque.push([nums[i], i]);
    }

    for (let i = k - 1; i < nums.length; i++) {
      while (deque.length > 0 && deque[deque.length - 1][0] > nums[i]) deque.pop();
      deque.push([nums[i], i]);
      answer.push(deque[0][0]);
      if (deque[0][1] === i - k + 1) deque.shift();
    }
    return answer;
  }
  //   console.log(solution([11, 12, 15, 20, 25, 10, 20, 13, 15, 19], 3)); // [11, 12, 15, 10, 10, 10, 13, 13]
}
