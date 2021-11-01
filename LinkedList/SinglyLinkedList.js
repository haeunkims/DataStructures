"use strict";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(i) {
    if (i < 0 || i >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(val, i) {
    let index = this.get(i);
    if (index) {
      index.val = val;
      return true;
    }
    return false;
  }
  insert(i, val) {
    if (i < 0 || i > this.length) return false;
    if (i === this.length) return this.push(val);
    let newNode = new Node(val);
    let pre = this.get(i - 1);
    let temp = pre.next;
    pre.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(i) {
    if (i < 0 || i >= this.length) return undefined;
    if (i === 0) return this.shift();
    if (i === this.length - 1) return this.pop();
    let preNode = this.get(i - 1);
    let removes = preNode.next;
    preNode.next = removes.next;
    return removes;
  }
}
var list = new SinglyLinkedList();
