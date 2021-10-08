class Stack {
  #array;

  constructor(array = []) {
    if (!Array.isArray(array)) throw new TypeError();
    this.#array = array;
  }

  push(value) {
    return this.#array.push(value);
  }

  pop() {
    return this.#array.pop();
  }

  entries() {
    return [...this.#array];
  }
}

const stack = new Stack([1, 2]);
console.log(stack.entries()); // [1, 2]
stack.push(3);
console.log(stack.entries()); // [1, 2, 3]
stack.pop();
console.log(stack.entries()); // [1, 2]
