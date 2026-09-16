let hasil = "";
for (let i = 6; i >= 1; i--) {
    if (i % 2 !== 0) { 
        for (let j = 1; j <= i; j++) hasil += i;
    } else { 
        for (let j = i; j >= 1; j--) hasil += j;
    }
}
console.log(hasil);