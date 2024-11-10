//1-misol
const array = [1, 2, 3, 4, 5];

const lastElement = array[array.length - 1];

console.log(lastElement);

//2-misol
function createCounter(n) {
  let value = n;

  function counter() {
    const current = value;
    value += 1;
    return current;
  }

  return counter;
}

const counter1 = createCounter(1);
const output1 = ["call", "call", "call"].map(() => counter1());
console.log(output1);

//3-misol
function sleep(millisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(millisec);
    }, millisec);
  });
}

const t1 = Date.now();
sleep(100).then((result) => {
  console.log(result);
  console.log(Date.now() - t1);
});

//4.1-misol
const ar = [1, 2, 3, 4];

Array.prototype.myReduce = function (fn, acc) {
  if (typeof fn !== "function") {
    throw new TypeError("First argument must be a function");
  }
  let result = acc;

  for (let i = 0; i < this.length; i++) {
    const element = this[i];

    if (typeof result === "undefined" && i === 0) {
      result = element;
    } else {
      result = fn(result, element);
    }
  }
  return result;
};

function plus(acc, el) {
  return acc + el;
}

const r = ar.reduce(plus, 0);

console.log(r);

//4.2-misol
function compose(functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
}

const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
const composedFn = compose(functions);
const result = composedFn(4);
console.log(result);

//5-misol
class Shakl {
  perimetr() {
    throw new Error("Bu metod aniqlansh kerak!");
  }

  yuza() {
    throw new Error("Bu metod aniqlansh kerak!");
  }
}

class TogriTurtburchak extends Shakl {
  constructor(uzunlik, kenglik) {
    super();
    this.uzunlik = uzunlik;
    this.kenglik = kenglik;
  }

  perimetr() {
    return 2 * (this.uzunlik + this.kenglik);
  }

  yuza() {
    return this.uzunlik * this.kenglik;
  }
}

class Aylana extends Shakl {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  perimetr() {
    return 2 * Math.YU * this.radius;
  }

  yuza() {
    return Math.YU * Math.pow(this.radius, 2);
  }
}

const togriTurtburchak = new TogriTurtburchak(5, 3);
console.log("To'g'ri to'rtburchak perimetri:", togriTurtburchak.perimetr());
console.log("To'g'ri to'rtburchak yuza:", togriTurtburchak.yuza());

const aylana = new Aylana(4);
console.log("Aylana perimetri:", aylana.perimetr());
console.log("Aylana yuza:", aylana.yuza());

//6-misol
function chegirma(chegirmaFoizi) {
  return function (narx) {
    return narx - narx * (chegirmaFoizi / 100);
  };
}

const onFoizChegirma = chegirma(10);
console.log("Chegirmali narx:", onFoizChegirma(200));

//7-misol
function savatcha() {
  const mahsulotlar = [];

  return function (mahsulot) {
    mahsulotlar.push(mahsulot);
    return mahsulotlar;
  };
}

const mySavat = savatcha();

console.log(mySavat("Olma"));
console.log(mySavat("Banan"));
console.log(mySavat("Apelsin"));

//8-misol
function plusNum(birinchiSon) {
  return function (ikkinchiSon) {
    return birinchiSon + ikkinchiSon;
  };
}

const plusFive = plusNum(5);
console.log(plusFive(3));
console.log(plusFive(10));

//9-misol
function parolTekshiruvchi(parol) {
  return function (kiritilganParol) {
    return kiritilganParol === parol;
  };
}

const tekshiruvchi = parolTekshiruvchi("maxfiyParol");

console.log(tekshiruvchi("1234"));
console.log(tekshiruvchi("12345"));

//10-misol
function teskariRaqam(son) {
  if (son < 10) return son;

  return parseInt(String(son % 10) + teskariRaqam(Math.floor(son / 10)));
}

console.log(teskariRaqam(1234));
console.log(teskariRaqam(98765));
console.log(teskariRaqam(1001));

//11-misol
function daraja(base, exponent) {
  if (exponent === 0) return 1;

  return base * daraja(base, exponent - 1);
}

console.log(daraja(2, 3));

//12-misol
function faktoriyal(n) {
  if (n === 0 || n === 1) return 1;

  return n * faktoriyal(n - 1);
}

console.log(faktoriyal(5));
console.log(faktoriyal(4));

