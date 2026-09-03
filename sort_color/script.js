const arr = [2, 0, 1];

function brute() {
  let i = 0;
  let j = 0;
  let k = arr.length - 1;
  while (i <= k) {
    if (arr[i] == 0) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      j++;
      i++;
    } else if (arr[i] == 2) {
      let temp = arr[k];
      arr[k] = arr[i];
      arr[i] = temp;
      k--;
    } else {
      i++;
    }
  }
  console.log(arr);
}

brute();
