let y = 0;
let arah = 1;
let tinggi = 10;

setInterval(() => {
    console.clear();
    for (let i = 0; i < tinggi; i++) {
        if (i === y) console.log("0");
        else console.log("|");
    }
    
    y += arah;
    if (y >= tinggi - 1 || y <= 0) arah *= -1;
}, 100);