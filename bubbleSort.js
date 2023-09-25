// Implement a function called bubbleSort. Given an array, bubbleSort will sort the values in the array.
function bubbleSort(arr) {
  const n = arr.length;

  // loop through all array elements
  for (let i = 0; i < n; i++) {
    // Flag to optimize the algorithm by stopping if no swaps occur in an iteration
    let swapped = false;

    // Last i elements are already in place, so we don't need to compare them
    for (let j = 0; j < n - i - 1; j++) {
      // Swap if the element found is greater than the next element
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap elements using destructuring assignment
        swapped = true;
      }
    }

    // If no two elements were swapped in the inner loop, the array is already sorted
    if (!swapped) {
      break;
    }
  }
}

// Example usage:
const myArray = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(myArray);
console.log("Sorted array is:", myArray);
