let angka = [12, 45, 2, 78, 34, 89, 23, 56, 90, 11];
let min = angka[0];

for (let i = 1; i < angka.length; i++) {
    if (angka[i] < min) min = angka[i];
}
console.log("Bilangan terkecil:", min);