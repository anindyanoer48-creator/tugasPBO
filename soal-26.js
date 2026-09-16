let n_awal = 1990;
let n_akhir = 2030;
let hasil = [];

for (let tahun = n_awal; tahun <= n_akhir; tahun++) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)) {
        if (tahun % 10 === 4) {
            hasil.push(tahun);
        }
    }
}
console.log(hasil.join(", "));