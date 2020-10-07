// Soal 1

var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];
let i = 0;
function callback(time) {
  if (time > 0) {
    i = (i + 1) % books.length; //jika lebih dari array.length, index ngulang ke 0
    readBooks(time, books[i], callback);
  }
}

readBooks(10000, books[i], callback);
// this function will loop through array until the time finished...

// if there is no book that can complete the time, example 3050, this will cause looping forever
// to avoid this, don't run callback in the else block (in function readBooks)
// when time < book.timeSpent , it will simply stop the function
