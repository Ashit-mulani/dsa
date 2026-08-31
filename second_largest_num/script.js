const arr = [10, 5, 20, 8, 15];

/**
 * brute force ;
 * time O(n)
 * space O(1)
 */
function brute() {
  let largest = arr[0];
  let second_largest = arr[1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second_largest = largest;
      largest = arr[i];
    } else if (arr[i] > second_largest && arr[i] !== largest) {
      second_largest = arr[i];
    }
  }
  console.log(second_largest);
}

brute();
