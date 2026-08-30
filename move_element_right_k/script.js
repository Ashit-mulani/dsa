const arr = [1, 2, 3, 4, 5];
const k = 2;

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

brute();

console.log(arr);
