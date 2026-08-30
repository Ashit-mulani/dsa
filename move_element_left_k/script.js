const arr = [1, 2, 3, 4, 5];
const k = 2;

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
}

brute();
console.log(arr);
