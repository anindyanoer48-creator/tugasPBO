let n_awal = 1;
let n_akhir = 30;
let hasil = [];

for (let i = n_awal; i <= n_akhir; i++) {
    if (i % 5 === 0) {
        hasil.push(i);
    }
}
console.log(hasil.join(", "));