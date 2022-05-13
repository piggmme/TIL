{
  function superStack(operationsStr) {
    const stack = [];
    const operations = operationsStr.map(op => op.split(' '));
    const result = [];

    for (let i = 0; i < operations.length; i++) {
      const [op, num1, num2] = operations[i];

      switch (op) {
        case 'push':
          stack.push(+num1);
          break;
        case 'pop':
          stack.pop();
          break;
        case 'inc':
          for (let j = 0; j < +num1; j++) {
            stack[j] += +num2;
          }
      }

      result.push(stack[stack.length - 1] || 'EMPTY');
    }
    return result;
  }

  //   console.log(superStack(['push 4', 'push 5', 'inc 2 1', 'pop', 'pop']));
}

{
  function superStack(operationsStr) {
    const stack = [];
    const operations = operationsStr.map(op => op.split(' '));

    for (let i = 0; i < operations.length; i++) {
      const [op, num1, num2] = operations[i];

      switch (op) {
        case 'push':
          stack.push([+num1, 0]);
          break;
        case 'pop':
          const [, d] = stack.pop();
          if (stack.length) stack[stack.length - 1][1] += +d;
          break;
        case 'inc':
          stack[num1 - 1][1] += +num2;
      }

      console.log(
        stack.length === 0
          ? 'EMPTY'
          : stack[stack.length - 1][0] + stack[stack.length - 1][1],
      );
    }
  }

  console.log(superStack(['push 4', 'push 5', 'inc 2 1', 'pop', 'pop']));
  //   console.log(
  //     superStack([
  //       'push 4',
  //       'pop',
  //       'push 3',
  //       'push 5',
  //       'push 2',
  //       'inc 3 1',
  //       'pop',
  //       'push 1',
  //       'inc 2 2',
  //       'push 4',
  //       'pop',
  //       'pop',
  //     ]),
  //   );
}
