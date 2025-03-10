class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    // return Math.max(...this.items);
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    }
    // return Math.min(...this.item);
    return this.items[0];
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.items.reduce((acc, curr) => acc + curr, 0);
  }
  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
