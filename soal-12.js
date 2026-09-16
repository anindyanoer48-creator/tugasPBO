let hasil = "";
for (let i = 1; i <= 9; i++) {
    if (Math.floor((i - 1) / 2) % 2 === 0) {
        for (let j = 1; j <= i; j++) hasil += i;
    } else {
        for (let j = 1; j <= i; j++) hasil += j;
    }
}
console.log(hasil);