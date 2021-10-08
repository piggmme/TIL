const Stack = (function () {
  // 클로저 => 개 쒯이다. 상태 유지가 안됨
  let temp;
  function Stack(array = []) {
    if (!Array.isArray(array)) throw new TypeError();
    temp = array;
  }

  Stack.prototype = {
    constructor: Stack,

    push(value) {
      return temp.push(value);
    },

    pop() {
      return temp.pop();
    },

    entries() {
      return [...temp];
    }
  };

  return Stack;
})();

const stack = new Stack([1, 2]);
console.log(stack.entries());
console.log(stack.temp);

const stack2 = new Stack([2, 3]);
stack2.push(1);
console.log(stack2.temp);
console.log(stack2.entries());
console.log(stack.entries());
