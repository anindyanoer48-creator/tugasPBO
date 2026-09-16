function hitungTotalKarakter(kalimat) {
    
    return kalimat.length;
}

let kalimatTugas = "Teknik Informatika 3 B";
let jumlahKarakter = hitungTotalKarakter(kalimatTugas);

console.log("Kalimat        : '" + kalimatTugas + "'");
console.log("Total karakter : " + jumlahKarakter);