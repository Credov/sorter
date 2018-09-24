class Sorter {
  constructor() {
    this.arr = new Array();
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    let sorted = indices.sort().map(x => this.arr[x]).sort(this.compareFunction);
    for(let i = 0; i < indices.length; i++) this.arr[indices[i]] = sorted[i];
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction
  }
}

module.exports = Sorter;