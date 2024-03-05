// *A stack is a data structure that follows the Last In, First Out (LIFO) principle.
// * In other words, the last element added to the stack is the first one to be removed.
class Stack {
  constructor() {
    this.items = [];
  }

  // Add element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Return the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }
}

// Example usage:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Output: 30

console.log(stack.pop()); // Output: 30

console.log(stack.size()); // Output: 2

console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.isEmpty()); // Output: true

// *  A queue is a data structure that follows the First In, First Out (FIFO) principle,
// *   similar to standing in a line or queue in the real world. In a queue,
// *  the first element added is the first one to be removed.

class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  // Return the front element without removing it
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the queue
  size() {
    return this.items.length;
  }

  // Clear the queue
  clear() {
    this.items = [];
  }
}

// Example usage:
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front()); // Output: 10

console.log(queue.dequeue()); // Output: 10

console.log(queue.size()); // Output: 2

console.log(queue.isEmpty()); // Output: false

queue.clear();
console.log(queue.isEmpty()); // Output: true


