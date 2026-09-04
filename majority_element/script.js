const arr = [2, 2, 1, 1, 1, 2, 2, 3, 1];

function brute() {
  const freq = {};
  const n = Math.trunc(arr.length / 2);
  let isMajority = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in freq) {
      freq[arr[i]]++;
    } else {
      freq[arr[i]] = 1;
    }
  }
  for (const key in freq) {
    if (freq[key] >= n) {
      isMajority = Number(key);
      break;
    }
  }
  console.log(isMajority);
}

brute();

function optimized() {
  let ans = arr[0];
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (count == 0) {
      ans = arr[i];
      count = 1;
    } else if (arr[i] == ans) {
      count++;
    } else {
      count--;
    }
  }
  console.log(ans);
}
optimized();
