function balikKalimat(kalimat) {
    return kalimat.split('').reverse().join('');
}

// Menjalankan fungsi dengan contoh kata
let kata = "Hasya Anindya Nur Ramadhan";
let hasil = balikKalimat(kata);

console.log("Kata asli   : " + kata);
console.log("Kata terbalik : " + hasil);