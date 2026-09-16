let angka = [12, 45, 2, 78, 34, 89, 23, 56, 90, 11];
let jumlahGanjil = 0;

for (let i = 0; i < angka.length; i++) {
    if (angka[i] % 2 !== 0) jumlahGanjil++;
}
console.log("Jumlah bilangan ganjil:", jumlahGanjil);