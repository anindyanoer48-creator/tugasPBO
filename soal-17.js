let n = 2;
let hasil = [];
for (let i = 1; i <= 11; i++) {
    hasil.push(n);
    if (i % 2 !== 0) {
        n += 10;
    } else {
        n -= 5;
    }
}
console.log(hasil.join(" "));