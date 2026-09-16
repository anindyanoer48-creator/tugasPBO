let n = 3;
let hasilKali = 1;
let deret = [];

for (let i = n; i >= 1; i--) {
    deret.push(i);
    hasilKali *= i;
}
console.log(`${n}!=${deret.join("x")}=${hasilKali}`);