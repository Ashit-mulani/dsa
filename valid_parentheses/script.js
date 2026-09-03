const parentheses = "([][])";

function brute() {
  const start = ["(", "{", "["];
  const stack = [];
  for (let i = 0; i < parentheses.length; i++) {
    const currunt = parentheses[i];
    if (start.includes(currunt)) {
      stack.push(currunt);
    } else {
      const last = stack.pop();
      if (
        (currunt === ")" && last !== "(") ||
        (currunt === "}" && last !== "{") ||
        (currunt === "]" && last !== "[")
      ) {
        console.log(false);
        return;
      }
    }
  }
  console.log(stack.length == 0);
}
brute();
