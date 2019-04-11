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

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle+1, end);
  return array;
}

let quickArray2 = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];
function partition(array, start, end) {
  const pivot = array[end -1]; //12
  let j = start; //14
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

//The pivot could have been either 14 or 17, because pivot could be any value in the array


let quickArray = [3,9,1,14,17,24,22,20];


