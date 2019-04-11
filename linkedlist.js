'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // O(1) 
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  // O(n)
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  // O(n)
  insertBefore(item, nextItem) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === nextItem) {
      this.insertFirst(item);
    }

    let tempNode = this.head;
    let previousNode = this.head;

    while ((tempNode !== null) && (tempNode.value !== nextItem)) {
      previousNode = tempNode;
      tempNode = tempNode.next;
    }
    if (tempNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = new _Node(item, tempNode);
    
  }

  // O(n)
  insertAfter(item, prevItem) {
    if (!this.head) {
      return null;
    }

    let tempNode = this.head;

    while ((tempNode !== null) && (tempNode.value !== prevItem)) {
      tempNode = tempNode.next;
    }
    if (tempNode === null) {
      console.log('Item not found');
      return;
    }
    const tempNext = tempNode.next;
    tempNode.next = new _Node(item, tempNext);
  }

  // O(n)
  insertAt(item, index) {
    if (!this.head) {
      return null;
    }

    let tempNode = this.head;
    let previousNode = this.head;
    let tempIndex = 0;

    while ((tempNode !== null) && (tempIndex !== index)) {
      previousNode = tempNode;
      tempNode = tempNode.next;
      tempIndex++;
    }
    if (tempNode === null && tempIndex !== index) {
      console.log('Index not available');
      return;
    }
    previousNode.next = new _Node(item, tempNode);
  }
  // O(n)
  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let tempNode = this.head;
    let previousNode = this.head;

    while ((tempNode !== null) && (tempNode.value !== item)) {
      previousNode = tempNode;
      tempNode = tempNode.next;
    }
    if (tempNode === null) {
      console.log(`Can't remove, ${item} not found`);
      return;
    }
    previousNode.next = tempNode.next;
  }
  // best case O(1) average case O(n)
  find(item) {
    if (!this.head) {
      return null;
    }

    let tempNode = this.head;
    while (tempNode.value !== item) {
      if (tempNode.next === null) {
        return null;
      } else {
        tempNode = tempNode.next;
      }
    }
    return tempNode;
  }

  getLength() {
    if(!this.head) {
      return 0;
    } 
    let counter = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }

  slice(start, end) {
    const results = new LinkedList();
    let capture = false;

    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === start) {
        capture = true;
      }
      if (currentNode.value === end) {
        capture = false;
      }
      if (capture) {
        results.insertLast(currentNode.value);
      }
      currentNode = currentNode.next;
    }
    return results;
  }
}

module.exports = { LinkedList };