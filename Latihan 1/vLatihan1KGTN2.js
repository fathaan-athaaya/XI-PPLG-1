const readlineSync = require("readline-sync");
 
let nilai = Number(readlineSync.question("Masukkan nilai: "));

if (nilai >= 78) {
    console.log("Selamat, Anda LULUS");
} else {
    console.log("Maaf, Anda TIDAK LULUS");
}
