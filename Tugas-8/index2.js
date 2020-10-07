var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

let i = 0;

readBooksPromise(10000, books[i])
  .then((time) => {
    i = (i + 1) % books.length;
    return readBooksPromise(time, books[i]);
  })
  .then((time) => {
    i = (i + 1) % books.length;
    return readBooksPromise(time, books[i]);
  })
  .then((time) => {
    i = (i + 1) % books.length;
    return readBooksPromise(time, books[i]);
  })
  .catch((timeout) => {
    console.log(
      `waktu habis, butuh waktu sekitar ${Math.abs(
        timeout
      )} milisecond lagi buat menyelesaikan bacaan`
    );
  });
