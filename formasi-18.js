let n = 6;
for (let i = 1; i <= n; i++) {
    console.log("0".repeat(i - 1) + "*" + "0".repeat(n - i + 1));
}