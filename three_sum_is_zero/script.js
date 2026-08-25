const arr = [-4, -1, -1, 0, 1, 2];

/**
 * brute force :
 * time O(n'3)
 * space O(1)
 */
function brute() {
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          return [arr[i], arr[j], arr[k]];
        }
      }
    }
  }
  return null;
}

/**
 * optimized :
 * time O(n'2)
 * space O(1)
 *
 */
function optimized() {
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      if (sum == 0) {
        return [arr[i], arr[left], arr[right]];
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
}
