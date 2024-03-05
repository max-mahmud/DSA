function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middle);
  const rightHalf = arr.slice(middle);

  const leftSorted = mergeSort(leftHalf);
  const rightSorted = mergeSort(rightHalf);

  return merge(leftSorted, rightSorted);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log(rightIndex)
  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
  // return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  // return result;
}
// Example usage:
const unsortedArray = [4, 2, 7, 1, 9, 3, 8, 5];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);

// Add remaining elements from both arrays
// while (leftIndex < left.length) {
//   result.push(left[leftIndex]);
//   leftIndex++;
// }
// while (rightIndex < right.length) {
//   result.push(right[rightIndex]);
//   rightIndex++;
// }

//td First Recursive Call (Divide):

// Split the array into two halves:
// leftHalf = [4, 2, 7, 1]
// rightHalf = [9, 3, 8, 5]
// Second Recursive Call (Divide):

// Further split each half:
// leftHalf = [4, 2]
// rightHalf = [7, 1]
// leftHalf = [9, 3]
// rightHalf = [8, 5]
// Third Recursive Call (Divide):

// Continue splitting:
// leftHalf = [4]
// rightHalf = [2]
// leftHalf = [7]
// rightHalf = [1]
// leftHalf = [9]
// rightHalf = [3]
// leftHalf = [8]
// rightHalf = [5]
// Merging Process (Combine):

// Merge the individual elements back together in a sorted manner:
// Merge [4] and [2] → [2, 4]
// Merge [7] and [1] → [1, 7]
// Merge [9] and [3] → [3, 9]
// Merge [8] and [5] → [5, 8]
// Merge Sorted Subarrays:

// Merge the sorted subarrays from the previous step:
// Merge [2, 4] and [1, 7] → [1, 2, 4, 7]
// Merge [3, 9] and [5, 8] → [3, 5, 8, 9]
// Final Merge:

// Merge the two final sorted subarrays:
// Merge [1, 2, 4, 7] and [3, 5, 8, 9] → [1, 2, 3, 4, 5, 7, 8, 9]

//===========td at last how its works======

// Merge [1, 2, 4, 7] and [3, 5, 8, 9] → [1, 2, 3, 4, 5, 7, 8, 9]:
// Initialize result = [].
// Initialize leftIndex and rightIndex to 0 for both merged subarrays.
// Compare elements at left[0] (1) and right[0] (3).
// Since 1 is smaller, add it to result and increment leftIndex.
// Continue this process until both merged subarrays are exhausted.
// The final merged array is [1, 2, 3, 4, 5, 7, 8, 9]
