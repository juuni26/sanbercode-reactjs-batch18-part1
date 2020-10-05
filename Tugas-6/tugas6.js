// Soal 1

const PI = 22 / 7;

const luasLingkaran = (r) => {
  let result = PI * r * r;
  return result;
};
const kelilingLingkaran = (r) => {
  let result = 2 * PI * r;
  return result;
};

console.log(luasLingkaran(7));
console.log(kelilingLingkaran(7));

// Soal 2

let kalimat = "";
const addKata = (kata) => {
  if (!kalimat) {
    //jika kalimat kosong maka tidak perlu beri space
    kalimat = `${kalimat}${kata}`;
  } else {
    kalimat = `${kalimat} ${kata}`;
  }
};
addKata("saya");
addKata("adalah");
addKata("seorang");
addKata("frontend");
addKata("developer");

console.log(kalimat);

// Soal 3

const newFunction = function literal(firstName, lastName) {
  const fullName = function () {
    console.log(firstName + " " + lastName);
    return;
  };

  return {
    firstName,
    lastName,   
    fullName,
  };
};

newFunction("William", "Imoh").fullName();

// Soal 4

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

const {firstName,lastName,destination,occupation} = newObject;
console.log(firstName, lastName, destination, occupation)

// Soal 5

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west,...east];

console.log(combined);
