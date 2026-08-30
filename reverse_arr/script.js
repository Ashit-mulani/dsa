const arr = [1, 2, 3, 4, 5, 6, 7];

/**
 * optimized
 * time O(n)
 * space O(1)
 */

function optimized() {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}

optimized();
console.log(arr);
