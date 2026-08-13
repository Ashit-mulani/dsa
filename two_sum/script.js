const arr = [2, 6, 8, 10, 12, 23];
const target = 22;

/**
 *brute force :
 *time O(n'2),
 *space O(1)
 */
function brute() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [arr[i], arr[j]];
      }
    }
  }
}

/**
 * optimized :
 * time O(n),
 * space O(1)
 */
function optimized() {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum == target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}
