function solution(nums) {
  let answer = [];
  let stack = [],
    flag;
  for (let x of nums) {
    if (x > 0) stack.push(x);
    else {
      if (stack.length === 0 || stack[stack.length - 1] < 0) {
        stack.push(x);
      } else {
        flag = 0;
        while (stack.length > 0 && stack[stack.length - 1] > 0) {
          let left = stack.pop();
          if (Math.abs(left) < Math.abs(x)) {
            flag = 1;
          } else if (Math.abs(left) === Math.abs(x)) {
            flag = 0;
            break;
          } else {
            stack.push(left);
            flag = 0;
            break;
          }
        }
        if (flag) stack.push(x);
      }
    }
  }
  answer = stack;
  return answer;
}
