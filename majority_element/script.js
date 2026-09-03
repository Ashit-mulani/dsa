const arr = [2, 2, 1, 1, 1, 2, 2];

function brute() {
  const freq = {};
  const n = Math.trunc(arr.length / 2);
  let isMajority = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in freq) {
      freq[arr[i]]++;
    } else {
      freq[arr[i]] = 1;
    }
  }
  for (const key in freq) {
    if (freq[key] > n) {
      isMajority = true;
      break;
    }
  }

  console.log(isMajority);
}

brute();
