class StackNode {
  constructor(value) {
    this.value = value;
  }
}

class Stack {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  push(value) {
    const previous = this.root;
    this.root = new StackNode(value);
    this.root.next = previous;
    this.size += 1;
  }

  pop() {
    if (this.isEmpty()) return null;
    const previous = this.root;
    this.root = this.root.next;
    this.size -= 1;
    return previous.value;
  }
}