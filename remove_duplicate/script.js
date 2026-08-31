const arr = [1, 1, 2, 2, 3, 4, 4, 5];

/**
 * brute force :
 * time O(n)
 * space O(n)
 */
function brute() {
  let new_arr = [arr[0]];
  for (let i = 1; i <= arr.length - 1; i++) {
    if (new_arr[new_arr.length - 1] != arr[i]) {
      new_arr.push(arr[i]);
    }
  }
  console.log(new_arr);
}

brute();

/**
 * Optimized
 * time O(n)
 * space O(1)
 */
function optimized() {
  let j = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j - 1]) {
      arr[j] = arr[i];
      j++;
    }
  }

  console.log(arr.slice(0, j));
}

optimized();
