// Primitive sorting:

  // Bubble sort
  // Selection Sort
  // Insertion sort

// Optimized sorting (Problem solving):

// Merge Sort (leetcode)
// Quick sort(Leetcode)

//?bubble sort
function bubbleSort(arr) {
    let len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  
    return arr;
  }
  
  let arr = [9,6,1, 12, 4, 7, 3,];
  console.log(bubbleSort(arr)); // Output: [1, 2, 3, 4, 5, 6, 7]