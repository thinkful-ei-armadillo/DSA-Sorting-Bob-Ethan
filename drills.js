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

let array = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];
console.log(mergeSort(array));