let n = 3;
let hasil = [];
for (let i = 1; i <= 10; i++) {
    hasil.push(n);
    if (i % 2 !== 0) {
        n *= 3;
    } else {
        n -= 5;
    }
}
console.log(hasil.join(" "));