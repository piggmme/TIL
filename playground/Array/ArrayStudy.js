{
  function compare(key) {
    return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
  }
}

// forEach 폴리필
{
  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
      if (typeof callback !== 'function') throw new TypeError();

      thisArg = thisArg || window;

      for (let i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }
}

// filter 폴리필
{
  if (!Array.prototype.filter) {
    Array.prototype.filter = function (callback, thisArg) {
      if (typeof callback !== 'function') throw new TypeError();

      thisArg = thisArg || window;

      const newArray = [];
      for (let i = 0; i < this.length; i++) {
        if (callback.call(thisArg, this[i], i, this)) newArray.push(this[i]);
      }
    };
    return newArray;
  }
}

// map 폴리필
{
  if (!Array.prototype.map) {
    Array.prototype.map = function (callback, thisArg) {
      if (typeof callback !== 'function') throw new TypeError();

      thisArg = thisArg || window;

      const newArray = [];
      for (let i = 0; i < this.length; i++) {
        newArray.push(callback.call(thisArg, this[i], i, this));
      }
    };
    return newArray;
  }
}

class Stack {
  #array;

  constructor(array = []) {
    if (!Array.isArray(array)) throw new TypeError();
  }

  push(value) {
    return this.push(value);
  }
}
