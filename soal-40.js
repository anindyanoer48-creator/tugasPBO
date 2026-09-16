let y = 0;
let tinggi = 10;

setInterval(() => {
    console.clear();
    for (let i = 0; i < tinggi; i++) {
        if (i === y) console.log("                    0");
        else console.log("                    |");
    }
    
    y++;
    if (y >= tinggi) y = 0;
}, 100);