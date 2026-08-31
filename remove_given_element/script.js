const arr = [3, 2, 2, 3, 4, 2, 5];
const target = 2;

/**
 * brute force :
 * time  O(n),
 * space O(n)
 */
function brute() {
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      new_arr.push(arr[i]);
    }
  }
  console.log(new_arr);
}

/**
 * optimized :
 * time O(n)
 * space O(1)
 */
function optimized() {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      arr[j] = arr[i];
      j++;
    }
  }
  arr.length = j;
}

optimized();

console.log(arr);
