// Soal 1 

var kataPertama = "saya",kataKedua = "senang",kataKetiga = "belajar", kataKeempat = "javascript";
const hasilKalimat = [kataPertama,kataKedua.charAt(0).toUpperCase()+kataKedua.slice(1),kataKetiga,kataKeempat.toUpperCase()].join(' '); 
console.log("jawaban 1:",hasilKalimat);

// Soal 2

var kataPertama = "1",kataKedua = "2",kataKetiga = "4",kataKeempat = "5";
let hasilTambah = +kataPertama + +kataKedua + +kataKetiga + +kataKeempat;
console.log("jawaban 2:",hasilTambah);

// Soal 3

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 4); 
var kataKedua =  kalimat.substr(4, 10);
var kataKetiga = kalimat.substr(15, 3);
var kataKeempat = kalimat.substr(19, 5);
var kataKelima = kalimat.substring(25);

console.log("jawaban 3: ")
console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// Soal 4 

var nilai;
nilai = 69;
let indeks =  nilai >=80 ? "A": nilai >=70 && nilai <80 ? "B" : nilai >= 60 && nilai < 70 ? "C" :  nilai >= 50 && nilai < 60 ? "D" : "E" ;
console.log(`jawaban 4: Nilai = ${nilai}, indeks = ${indeks}`);

// Soal 5

var tanggal = 26;
var bulan = 6;
var tahun = 1998;

switch(bulan){
    case 6:
        console.log("Jawaban 5: 26 Juni 1998");
        break;
}