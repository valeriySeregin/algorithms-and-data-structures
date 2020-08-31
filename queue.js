class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  isEmpty() {
    return this.first === null;
  }

  getSize() {
    return this.size;
  }

  enqueue(value) {
    const previousLast = this.last;
    this.last = new QueueNode(value);

    if (this.isEmpty()) {
      this.first = this.last;
    } else {
      previousLast.next = this.last;
    }

    this.size += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      this.last = null;
      return null;
    }
    const previousFirst = this.first.value;
    this.first = this.first.next;
    this.size -= 1;
  
    return previousFirst;
  }
}