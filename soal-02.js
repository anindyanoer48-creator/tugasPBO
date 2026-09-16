function hitungHuruf(kalimat, hurufDicari) {
    let jumlah = 0;
    
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === hurufDicari) {
            jumlah++; 
        }
    }
    
    return jumlah;
}


let kalimatTugas = "Pemrograman berorientasi objek";
let hurufYangDicari = "o";
let hasil = hitungHuruf(kalimatTugas, hurufYangDicari);

console.log("Kalimat asli  : " + kalimatTugas);
console.log("Huruf dicari  : " + hurufYangDicari);
console.log("Jumlah huruf  : " + hasil);