const string = "naman";

/**
 * brute force :
 * time O(n),
 * space O(n)
 */
function brute() {
  let new_string = string.split("").reverse().join("");
  return new_string == string;
}

/**
 * optimized :
 * time O(n),
 * space O(1)
 */
function optimized() {
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] != string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
