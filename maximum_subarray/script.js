const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function brute() {
  let sum = 0;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  console.log(max);
}

brute();
