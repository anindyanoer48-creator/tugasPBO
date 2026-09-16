let n_awal = 1;
let n_akhir = 20;
let prima = [];

for (let i = n_awal; i <= n_akhir; i++) {
    if (i < 2) continue;
    let isPrima = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrima = false;
            break;
        }
    }
    if (isPrima) prima.push(i);
}
console.log("Bilangan Prima:", prima.join(", "));