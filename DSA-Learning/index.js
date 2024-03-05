
//? Selection Sort==most slow algrthm
// const arrayToSort = [64, 34, 25, 12];

// function selectionSort(data) {
//   for (let i = 0; i < data.length; i++) {
//     let minId = i;
//     for (let j = i; j < data.length; j++) {
//       if (data[j] > data[minId]) minId = j;
//     }
//     let temp = data[minId];
//     data[minId] = data[i];
//     data[i] = temp;
//   }
// }

// selectionSort(arrayToSort);
// console.log(arrayToSort);

//? insertion Sort
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let current = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j--; //reverse loop
//     }
//     // console.log(j) => first -1
//     arr[j + 1] = current;
//   }
// }

// const arrayToSort = [34, 25, 12, 22, 11, 90];
// insertionSort(arrayToSort);
// console.log(arrayToSort); // Sorted array

//? MAP Data Structure
//Time complexity of map 
//  insertion  // O(1)
//  deletion    O(1)
//  updation   O(1)
//  searching value   O(n)
//  searching key   O(1)

// const myMap = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
// ]);

// myMap.set("key3", "value3");
// myMap.get("key4");
// myMap.has("key1"); // true
// myMap.delete("key2");
// const mapSize = myMap.size; // 2
// console.log(myMap); //Map(3) { 'key1' => 'value1','key3' => 'value3' }

// myMap.forEach((value, key) => {
//   console.log(`Key: ${key}, Value: ${value}`);
// });

// for (const key of myMap) {
//  console.log(key[1])
// }

//? SET Data Structure
//Time complexity of set 
// insertion   O(1)
//  deletion    O(1)
//  updation    O(1)
//  searching   O(1)

// const mySet = new Set([1, 2, 3, 2, 1]);
// mySet.add(4);
// mySet.delete(1);
// mySet.has(2); // true
// const setSize = mySet.size; //3
// mySet.clear();
// console.log(mySet);

// mySet.forEach(value => {
//   console.log(value);
// })
