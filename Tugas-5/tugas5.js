// Soal 1

// const halo = () => "Halo Sanbers!";
function halo(){
  return "Halo Sanbers!";
}
console.log(halo());

// Soal 2

// const kalikan = (n, m) => n * m;
function kalikan(n,m){
  return n*m;
}

var num1 = 12,
  num2 = 4;
var hasilKali = kalikan(num1, num2);

console.log(hasilKali);

// Soal 3

// const introduce = (name, age, address, hobby) =>
//   `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;

function introduce(name, age, address, hobby){
  return "Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby+"!";
}
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

// Soal 4

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
// const objDaftarPeserta = {};
// [
//   objDaftarPeserta.nama,
//   objDaftarPeserta["jenis kelamin"],
//   objDaftarPeserta.hobi,
//   objDaftarPeserta["tahun lahir"],
// ] = arrayDaftarPeserta;
// arrayDaftarPeserta = Object.assign({}, objDaftarPeserta);
arrayDaftarPeserta = {nama:arrayDaftarPeserta[0],"jenis kelamin":arrayDaftarPeserta[1],hobi:arrayDaftarPeserta[2],"tahun lahir":arrayDaftarPeserta[3]};

console.log(arrayDaftarPeserta);

// Soal 5

const buah = [
  {
    nama: "strawberry",
    warna: "merah",
    "ada bijinya": "tidak",
    harga: 9000,
  },
  { nama: "jeruk", 
    warna: "oranye", 
    "ada bijinya": "ada", 
    harga: 8000 },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    "ada bijinya": "ada",
    harga: 10000,
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    "ada bijinya": "tidak",
    harga: 5000,
  },
];

console.log(buah[0]);

// Soal 6
var dataFilm = [];

// const addDataFilm = (nama, durasi, genre, tahun) => {
//   dataFilm.push({ nama: nama, durasi: durasi, genre: genre, tahun: tahun });
// };
function addDataFilm(nama, durasi, genre, tahun){
  dataFilm.push({ nama: nama, durasi: durasi, genre: genre, tahun: tahun });
}

addDataFilm("step up","1 jam 30 menit","dance",2017);
addDataFilm("step down","30 menit","joget",2019);

console.log(dataFilm);
