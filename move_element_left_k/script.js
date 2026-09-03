const arr = [1, 2, 3, 4, 5];
let k = 2;
k = k % arr.length;

/**
 *  brute force  :
 *  time O(nk),
 *  space O(1)
 */

function brute() {
  for (let i = 0; i < k; i++) {
    let copy = arr[0];
    for (let j = 0; j <= arr.length - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr[arr.length - 1] = copy;
  }
  console.log(arr);
}

/**
 * optimized :
 * time O(n)
 * space O(n)
 */
function otherOptimized() {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[(i + k) % arr.length];
  }
  console.log(temp);
}

/**
 * optimized :
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
function optimized() {
  reverse(0, k - 1);
  reverse(k, arr.length - 1);
  reverse(0, arr.length - 1);
  console.log(arr);
}

optimized();
