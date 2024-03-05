function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot element
  const pivot = arr[Math.floor(Math.random() * arr.length)];

  // Partition the array into two sub-arrays
  const left = [];
  const right = [];

  for (const element of arr) {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    }
  }
  // Recursively sort the sub-arrays
  return [...quickSort(left), pivot, ...quickSort(right)];
//   return quickSort(left).concat(pivot, quickSort(right))
}

// Example usage:
const unsortedArray = [3, 2, 7, 9, 4, 3, 5, 1];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);

//   quickSort(left): This part recursively applies the quickSort function to the left sub-array.
//  This means that the elements in the left sub-array will be sorted using the same Quick Sort algorithm.
