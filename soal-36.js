let pos = 0;
let lebar = 20;

setInterval(() => {
    console.clear();
    console.log("\n\n\n\n\n"); 
    let baris = "";
    for (let i = 0; i < lebar; i++) {
        baris += (i === pos) ? "0" : "-";
    }
    console.log(baris);
    
    pos++;
    if (pos >= lebar) pos = 0;
}, 100);