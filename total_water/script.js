const height = [4, 2, 0, 3, 2, 5];

function brute() {
  let total = 0;
  for (let i = 0; i < height.length; i++) {
    let leftMax = 0;
    let rightMax = 0;
    for (let j = 0; j <= i; j++) {
      leftMax = Math.max(leftMax, height[j]);
    }
    for (let k = i; k < height.length; k++) {
      rightMax = Math.max(rightMax, height[k]);
    }
    const water = Math.min(leftMax, rightMax) - height[i];
    total += water;
  }
  console.log(total);
}

brute();
