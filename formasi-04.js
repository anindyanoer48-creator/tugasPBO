let n = 6;
for (let i = 1; i < n; i++) {
    console.log("*".repeat(i) + " ".repeat(2 * (n - i) - 1) + "*".repeat(i));
}
console.log("*".repeat(2 * n - 1));