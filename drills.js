'use strict';
// 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
// middle = 16
// left[21, 1, 26, 45, 29, 28, 2, 9]
// middle = 29
// left [21, 1, 26, 45]
// right[29, 28, 2, 9]


// right[16, 49, 39, 27, 43, 34, 46, 40]
// middle 43
// left 16, 49, 39, 27
// right3, 34, 46, 40
const { LinkedList } = require('./linkedlist');
const util = require('util');
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left,right,array);
}
function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  //loop from left and right as long as left and right have untouched elements
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }
  //if there are remaining left elements loop through and do the same
  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }
  //the same case, but for the right side
  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}
//after 3 recursive calls our resulting list is [21, 1]
//after 16 recursive calls our resulting list is [16, 49]
//the first 2 lists to be merged are [21], and [1]
//on the seventh merge to lists to be merged are left : [1, 21, 26, 45] and right: [2, 9, 28, 29]

let array = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];
// console.log(mergeSort(array));

function quickSortEndPivot(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partitionEndPivot(array, start, end);

  // is it true that...
  //   arr[0] -> arr[middle-1] are all less than arr[middle]
  //   arr[middle+1] -> arr[arr.length-1] are all greater than arr[middle]  ?


  array = quickSortEndPivot(array, start, middle);
  array = quickSortEndPivot(array, middle+1, end);
  return array;
}

function partitionEndPivot(array, start, end) {

  const pivot = array[end -1];

  let j = start;

  for (let i = start; i < end -1; i++) {

    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }

  swap(array, end-1, j);

  return j;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


function quickSortStartPivot(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partitionStartPivot(array, start, end);

  // is it true that...
  //   arr[0] -> arr[middle-1] are all less than arr[middle]
  //   arr[middle+1] -> arr[arr.length-1] are all greater than arr[middle]  ?

  array = quickSortStartPivot(array, start, middle);
  array = quickSortStartPivot(array, middle+1, end);
  return array;
}

function partitionStartPivot(array, start, end) {

  const pivot = array[start];

  let j = end-1;

  for (let i = end-1; i > start; i--) {

    if (array[i] >= pivot) {
      swap(array, i, j);
      j--;
    }
  }

  swap(array, start, j);

  return j;
}



//The pivot could have been either 14 or 17, because pivot could be any value in the array


let quickArray  = [3,9,1,14,17,24,22,20];
let quickArray2 = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];

// console.log(quickSortStartPivot(quickArray));
// console.log(quickSortStartPivot(quickArray2));

// when using an end pivot, the array after 2 calls to partition is...
  // 3, 9, 10, 12, 19, 14, 17, 16, 13, 15

// WHen using a start pivot, the array after 2 calls to partition is...
  // 9, 3, 10, 13, 12, 14, 17, 15, 19, 16

let quickArray3 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13,
                   40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68,
                   15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85,
                   63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46,
                   13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64,
                   43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54,
                   84, 34, 53, 78, 40, 14, 5];

// console.log(quickSortEndPivot(quickArray3));

function mergeSortLinkedList(list) {

  const length = list.getLength();
  if (length <= 1) {
    return list;
  }

  const middle = Math.floor(length / 2);
  let left = list.slice(0, middle);
  let right = list.slice(middle, length);

  left = mergeSortLinkedList(left);
  right = mergeSortLinkedList(right);
  return mergeLinkedList(left, right, list);
}
function mergeLinkedList(left, right, list) {

  //loop from left and right as long as left and right have untouched elements
  let currentRightNode = right.head;
  let currentLeftNode = left.head;

  while(currentLeftNode !== null && currentRightNode !== null) {
    if (currentLeftNode.value < currentRightNode.value) {
      list.insertLast(currentLeftNode.value);
    }
    else {
      list.insertLast(currentRightNode.value);
    }
    currentLeftNode = currentLeftNode.next;
    currentRightNode = currentRightNode.next;
  }
  //add all remaining items from left
  while (currentLeftNode !== null) {
    list.insertLast(currentLeftNode.value);
    currentLeftNode = currentLeftNode.next;
  }
  //add all remaining items from right
  while (currentRightNode !== null) {
    list.insertLast(currentRightNode.value);
    currentRightNode = currentRightNode.next;
  }

  return list;
}

let list = new LinkedList();
list.insertFirst(5);
list.insertFirst(7);
list.insertFirst(2);
list.insertFirst(8);
list.insertFirst(12);
list.insertFirst(49);
list.insertFirst(23);
list.insertFirst(32);
console.log(util.inspect(mergeSortLinkedList(list), true, null));
console.log(util.inspect(list, true, null));