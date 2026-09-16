let n = 5;
console.log("*".repeat(2 * n + 1));
for (let i = n; i >= 1; i--) {
    console.log("*".repeat(i) + " ".repeat(2 * (n - i) + 1) + "*".repeat(i));
}