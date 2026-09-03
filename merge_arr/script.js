const arr1 = [3, 4, 6];
const arr2 = [3, 6, 7, 8, 9];

function brute() {
  let one = 0;
  let two = 0;
  let new_arr = [];
  while (one < arr1.length && two < arr2.length) {
    if (arr1[one] < arr2[two]) {
      new_arr.push(arr1[one]);
      one++;
    } else {
      new_arr.push(arr2[two]);
      two++;
    }
  }
  if (one < arr1.length) {
    pushRemaining(new_arr, arr1, one);
  }
  if (two < arr2.length) {
    pushRemaining(new_arr, arr2, two);
  }
  console.log(new_arr);
}

function pushRemaining(pushIn, pushFrom, startIdx) {
  while (pushFrom.length > startIdx) {
    pushIn.push(pushFrom[startIdx]);
    startIdx++;
  }
}

brute();
