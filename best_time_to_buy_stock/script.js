const arr = [4, 10, 0, 3, 5, 1, 0];

function brute() {
  let maxProfit = 0;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] - min > maxProfit) {
      maxProfit = arr[i] - min;
    }
  }
  console.log(min, maxProfit);
}

brute();
