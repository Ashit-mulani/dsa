const arr = ["flower", "flow", "flight"];

/**
 * brute force:
 * time O(S)
 * space O(1)
 */
function brute() {
  let common = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let j = 0;
    while (j < arr[i].length && j < common.length && common[j] == arr[i][j]) {
      j++;
    }
    common = arr[i].substring(0, j);
  }
  console.log(common);
}

brute();
