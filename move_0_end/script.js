const arr = [0, 1, 0, 3, 12];

/**
 * brute force :
 * time O(n),
 * space O(n)
 */

function brute() {
  const zeros = [];
  const other = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == 0) {
      zeros.push(0);
    } else {
      other.push(arr[i]);
    }
  }
  console.log([...other, ...zeros]);
}

/**
 * optimized :
 * time O(n),
 * space O(1)
 */
function optimized() {
  let left = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] !== 0) {
      [arr[left], arr[i]] = [arr[i], arr[left]];
      left++;
    }
  }
  console.log(arr);
}

optimized();
