let n = 1;
let hasil = [];
for (let i = 1; i <= 12; i++) {
    hasil.push(n);
    if (i % 2 !== 0) {
        n += 4;
    } else {
        n -= 2;
    }
}
console.log(hasil.join(" "));