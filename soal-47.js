let n_awal = 1;
let n_akhir = 10;
let totalGenap = 0;

for (let i = n_awal; i <= n_akhir; i++) {
    if (i % 2 === 0) totalGenap += i;
}
console.log("Total bilangan genap:", totalGenap);