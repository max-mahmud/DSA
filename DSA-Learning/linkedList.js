// ?  Linked List
// A linked list is a linear data structure that includes a series of connected nodes. Here, each node stores the data and the address of the next node.
// Node class to represent elements in the linked list
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at the beginning of the linked list
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  // Insert at the end of the linked list
  insertLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Insert at a specific index
  insertAt(data, index) {
    const size = this.size();

    if (index < 0 || index > size) {
      throw new Error(`Invalid index, min=0, max=${size},`);
    }

    if (index === 0 || !this.head) {
      this.insertFirst(data);
      return;
    }

    const newNode = new Node(data);

    let current = this.head;
    let count = 0;
    let previous;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    newNode.next = current;
    previous.next = newNode;
  }

  // Get the size of the linked list
  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  // Remove element at a specific index
  removeAt(index) {
    if (index === 0 && this.head) {
      this.head = this.head.next;
      return;
    }
    const size = this.size();
    if (index < 0 || index >= size) {
      throw new Error(`Invalid index, min=0, max=${size},`);
    }
    let current = this.head;
    let count = 0;
    let previous;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    if (current) {
      previous.next = current.next;
    }
  }

  // Clear the entire linked list
  clear() {
    this.head = null;
  }

  // Print the linked list elements
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Search for a node with specific data
  search(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }

    return null; // Node with data not found
  }

  // Search for a node at a specific index
  searchByIndex(index) {
    if (index < 0 || index >= this.size()) {
      return null; // Invalid index
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current;
  }

  // Reverse the linked list
  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current) {
      // Save the next node
      next = current.next;
      // Node { data: 20, next: Node { data: 30, next: null } }
      // Node { data: 30, next: null }
      // null
      current.next = prev;
      // null
      // Node { data: 10, next: null }
      // Node { data: 20, next: Node { data: 10, next: null } }

      // Move to the next nodes
      prev = current;
      // Node { data: 10, next: null }
      // Node { data: 20, next: Node { data: 10, next: null } }
      // Node { data: 30,
      //   next: Node { data: 20, next: Node { data: 10, next: null } } }
      current = next;
    }

    // Update the head to the last node (which is now the first)
    this.head = prev;
  }

  // Detect a loop in the linked list using Floyd's Cycle Detection Algorithm
  //!kisui bhjini
  //   loopDetectionWithSlowPtr(){
  //     let slowPtr=this.head
  //     let fastPtr= slowPtr;
  //     while(slowPtr && fastPtr && fastPtr.next){
  //         slowPtr =slowPtr.next;
  //         fastPtr = fastPtr.next.next;
  //         if(slowPtr === fastPtr){
  //             return true
  //         }
  //     }

  //     return false;
  // }
}

// Example usage:
const linkedList = new LinkedList();

linkedList.insertFirst(30);
linkedList.insertFirst(20);
linkedList.insertFirst(10);
// linkedList.insertAt(40, 3);
// linkedList.insertLast(3);

// linkedList.removeAt(2);
console.log("Linked List:", linkedList.head);
console.log("Size of the Linked List:", linkedList.size());
// console.log("Linked List after removing at index 1:");
// linkedList.printList();

// linkedList.clear();
// console.log("Linked List after clearing:");
// linkedList.printList();

// console.log(linkedList.search(10))
// console.log(linkedList.searchByIndex(2))

linkedList.reverse();
