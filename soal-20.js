let n = 1;
let hasil = [];
for (let i = 1; i <= 13; i++) {
    hasil.push(n);
    let step = i % 3;
    
    if (step === 1) {
        n += 1;
    } else if (step === 2) {
        n += 2;
    } else {
        n += 3;
    }
}
console.log(hasil.join(" "));