function hasContiguousSubarraySum(arr, target) {
  let start = 0;
  let current_sum = 0;

  for (let end = 0; end < arr.length; end++) {
      current_sum += arr[end];

      // Shrink the window as long as the current_sum is greater than the target
      while (current_sum > target && start <= end) {
          current_sum -= arr[start];
          start++;
      }

      // Check if the current sum equals the target
      if (current_sum === target) {
          return true;
      }
  }

  return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasContiguousSubarraySum(arr, target));  // Output: true
