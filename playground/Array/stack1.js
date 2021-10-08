const Stack = (function () {
  function Stack(array = []) {
    if (!Array.isArray(array)) throw new TypeError();
    this.array = array;
  }

  Stack.prototype = {
    constructor: Stack,

    push(value) {
      return this.array.push(value);
    },

    pop() {
      return this.array.pop();
    },

    entries() {
      return [...this.array];
    }
  };

  return Stack;
})();

const stack = new Stack([1, 2]);
console.log(stack.entries());

console.log(stack.array);
