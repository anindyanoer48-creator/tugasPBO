let n = 6;
for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(i - 1) + "*".repeat(2 * (n - i) + 1));
}