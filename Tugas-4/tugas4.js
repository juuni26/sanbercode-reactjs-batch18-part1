// Soal 1

let count = 0;
let iteration = 1;

while (iteration === 1) {
  if (count === 0) {
    console.log("LOOPING PERTAMA");
    count += 2;
  } else if (count == 22) {
    iteration = 2;
    while (count > 0) {
      if (count === 22) {
        console.log("LOOPING KEDUA");
        count -= 2;
      } else {
        console.log(`${count} - I will become a frontend developer `);
        count -= 2;
      }
    }
  } else {
    console.log(`${count} - I love coding `);
    count += 2;
  }
}

// Soal 2

for (let i =1;i<=20;i++){
    if(i%3===0 && i%2 === 1){
    console.log(`${i} - I Love Coding `);
    }    
    else if(i%2 ===0){
    console.log(`${i} - Berkualitas `);
    }
    else {
    console.log(`${i} - Santai `);
    }
}

// Soal 3

for(let i=1;i<=7;i++){
    console.log(`${('#').repeat(i)}`);
}

// Soal 4

var kalimat="saya sangat senang belajar javascript";
let kalimatArray = kalimat.split(' ');
console.log(kalimatArray);

// Soal 5

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort().forEach((buah)=>{
    console.log(buah);
})

// alternative For loop biasa
// for(let i=0;i<5;i++){
//     console.log(daftarBuah[i]);
// }