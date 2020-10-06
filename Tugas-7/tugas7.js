// Soal 1

// Buatlah class Animal yang menerima satu parameter constructor berupa name.
//  Secara default class Animal akan memiliki property yaitu legs (jumlah kaki) yang bernilai 4 dan cold_blooded bernilai false.

// release 0
class Animal {
  constructor(name) {
    this._name = name;
    this._legs = 4;
    this._cold_blooded = false;
  }
  get name() {
    return this._name;
  }
  get legs() {
    return this._legs;
  }
  get cold_blooded() {
    return this._cold_blooded;
  }
}

var sheep = new Animal("shaun");

console.log(sheep.name); // "shaun"
console.log(sheep.legs); // 4
console.log(sheep.cold_blooded); // false

// release 1

class Ape extends Animal {
  constructor(name) {
    super(name);
    this._legs = 2;
  }
  yell() {
    console.log("Auooo");
  }
}
class Frog extends Animal {
  jump() {
    console.log("hop hop");
  }
}

var sungokong = new Ape("kera sakti");
sungokong.yell(); // "Auooo"

var kodok = new Frog("buduk");
kodok.jump(); // "hop hop"

// Soal 2

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    var output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => {
      this.render(); // function arrow no this, so this here is a this class reference
    }, 1000);
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
