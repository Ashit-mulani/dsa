const string = "wrewddsfgsdfgr";

/**
 * brute force
 * time O(n'2)
 * space o(n2)
 */
function brute() {
  let logest = "";
  for (let i = 0; i < string.length; i++) {
    let sub = "";
    let seen = new Set();
    for (let j = i; j < string.length; j++) {
      if (seen.has(string[j])) {
        break;
      }
      seen.add(string[j]);
      sub += string[j];
      if (sub.length > logest.length) {
        logest = sub;
      }
    }
  }
  console.log(logest);
}

brute();
