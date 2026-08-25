let n = 5;

for (let a = 1; a <= n; a++) {
  console.log("* ".repeat(a));
}
for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= a; b++) {
    process.stdout.write("* ");
  }
  console.log();
}

for (let a = 1; a <= n; a++) {
  let num = 65;
  for (let b = 1; b <= a; b++) {
    process.stdout.write(String.fromCharCode(num) + " ");
    num++;
  }
  console.log();
}

for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= n - a; b++) {
    process.stdout.write(" ");
  }
  for (let c = 1; c <= a; c++) {
    process.stdout.write("*");
  }
  console.log();
}

let num = n % 2 == 0 ? n : n + 1;
for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n; b++) {
    if (a == b || a + b == num) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}

for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= n - a; b++) {
    process.stdout.write(" ");
  }
  for (let c = 1; c <= a; c++) {
    process.stdout.write(" *");
  }
  console.log();
}

for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n - a; b++) {
    process.stdout.write(" ");
  }
  for (let c = 1; c <= 2 * a - 1; c++) {
    process.stdout.write("*");
  }
  console.log();
}

for (let a = n; a >= 1; a--) {
  for (let b = 1; b <= n - a; b++) {
    process.stdout.write(" ");
  }
  for (let c = 1; c <= 2 * a - 1; c++) {
    process.stdout.write("*");
  }
  console.log();
}

for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n - a; b++) {
    process.stdout.write(" ");
  }
  for (let c = 1; c <= 2 * a - 1; c++) {
    process.stdout.write(c + "");
  }
  console.log();
}

for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n; b++) {
    if (a + b == n - 1) {
      process.stdout.write("* ");
    }
  }
  console.log();
}

for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n - a; b++) {
    process.stdout.write(" ");
  }
  if (a == n) {
    for (let d = 1; d <= 2 * n - 1; d++) {
      process.stdout.write("*");
    }
  } else {
    process.stdout.write("*");
    for (let c = 1; c <= 2 * a - 3; c++) {
      process.stdout.write(" ");
    }
    if (a > 1) {
      process.stdout.write("*");
    }
  }
  console.log();
}

for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= a; b++) {
    process.stdout.write(b + "");
  }
  console.log();
}
for (let a = n - 1; a >= 1; a--) {
  for (let b = 1; b <= a; b++) {
    process.stdout.write(b + "");
  }
  console.log();
}

for (let a = 1; a <= n; a++) {
  for (b = 1; b <= n - a; b++) {
    process.stdout.write(" ");
  }
  for (c = 1; c <= a; c++) {
    process.stdout.write(c + "");
  }
  for (d = a - 1; d >= 1; d--) {
    process.stdout.write(d + "");
  }
  console.log();
}

for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= a; b++) {
    if ((a + b) % 2 == 0) {
      process.stdout.write(0 + "");
    } else {
      process.stdout.write(1 + "");
    }
  }
  console.log();
}

for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= a; b++) {
    process.stdout.write(a + "");
  }
  console.log();
}
for (let a = n - 1; a >= 1; a--) {
  for (let b = 1; b <= a; b++) {
    process.stdout.write(a + "");
  }
  console.log();
}

for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= a; b++) {
    process.stdout.write(b + "");
  }
  console.log();
}
for (let a = n - 1; a >= 1; a--) {
  for (let b = 1; b <= a; b++) {
    process.stdout.write(b + "");
  }
  console.log();
}

for (let a = 1; a <= n; a++) {
  for (let b = 2; b <= a; b++) {
    process.stdout.write("-");
  }
  for (let c = 0; c <= n - a; c++) {
    process.stdout.write(c + a + "");
  }
  console.log();
}

for (let a = 1; a <= n; a++) {
  for (let b = 1; b <= n; b++) {
    let num = ((a + b - 2) % n) + 1;
    process.stdout.write(num + "");
  }
  console.log();
}
