let n = 6;
let lebar = 7;
for (let i = 1; i <= n; i++) {
    if (i === 1 || i === n) {
        console.log("0".repeat(lebar));
    } else {
        console.log("0" + "*".repeat(lebar - 2) + "0");
    }
}