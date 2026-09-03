const arr = [1, 2, 3, 4, 5];
let k = 1;
k = k % arr.length;

/**
 * brute force :
 * time O(nk),
 * space O(1)
 */
function brute() {
  for (let i = 0; i < k; i++) {
    let copy = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = copy;
  }
}

/**
 * Optimized :
 * time O(n),
 * space O(n)
 */
function optimized() {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp[(i + k) % arr.length] = arr[i];
  }
  console.log(temp);
}

/**
 * Optimized :
 * time O(n),
 * space O(1)
 */
function reverse(startIdx, endIdx) {
  while (startIdx < endIdx) {
    let temp = arr[startIdx];
    arr[startIdx] = arr[endIdx];
    arr[endIdx] = temp;
    startIdx++;
    endIdx--;
  }
}

function otherOptimized() {
  reverse(0, arr.length - 1);
  reverse(0, k - 1);
  reverse(k, arr.length - 1);
  console.log(arr);
}
otherOptimized();
