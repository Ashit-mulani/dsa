const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

/**
 * brute force :
 * time O(n'2)
 * space O(1)
 */
function brute() {
  let maxArea = 0;
  for (let i = 0; i < arr.length; i++) {
    let hight = 0;
    let width = 0;
    let area = 0;
    for (let j = i + 1; j < arr.length; j++) {
      hight = Math.min(arr[i], arr[j]);
      width = j - i;
      area = hight * width;
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }
  return maxArea;
}

/**
 * brute force :
 * time O(n)
 * space O(1)
 */
function optimized() {
  let maxArea = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const hight = Math.min(arr[left], arr[right]);
    const width = right - left;
    const area = hight * width;
    if (area > maxArea) {
      maxArea = area;
    }
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

console.log(optimized());
