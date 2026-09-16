let pos = 0;
let arah = 1;
let lebar = 20;

setInterval(() => {
    console.clear();
    let baris = "";
    for (let i = 0; i < lebar; i++) {
        baris += (i === pos) ? "0" : "-";
    }
    console.log(baris);
    
    pos += arah;
    if (pos >= lebar - 1 || pos <= 0) arah *= -1;
}, 100);