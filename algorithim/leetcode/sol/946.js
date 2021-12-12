// 946. Validate Stack Sequences
// https://leetcode.com/problems/validate-stack-sequences/

{
  var validateStackSequences = function (pushed, popped) {
    pushed = pushed.reverse();
    popped = popped.reverse();
    const stack = [pushed.pop()];

    while (pushed.length) {
      while (stack[stack.length - 1] === popped[popped.length - 1]) {
        stack.pop();
        popped.pop();
      }
      stack.push(pushed.pop());
    }
    while (
      stack.length &&
      popped.length &&
      stack[stack.length - 1] === popped[popped.length - 1]
    ) {
      stack.pop();
      popped.pop();
    }

    return !stack.length;
  };

  console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])); // true
  console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])); // false
}
