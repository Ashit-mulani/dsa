const arr = [1, 2, 4, 5, 6];

/**
 * Optimized
 * time O(n)
 * space O(1)
 */
function optimized() {
  let n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  let currentSum = 0;
  for (const num of arr) {
    currentSum += num;
  }
  console.log(expectedSum - currentSum);
}

optimized();

/**
 *  with XOR
 */
function xor() {
  let xor = arr.length;
  for (let i = 1; i < arr.length; i++) {
    xor ^= i;
    xor ^= arr[i - 1];
  }
  console.log(xor);
}

xor();
