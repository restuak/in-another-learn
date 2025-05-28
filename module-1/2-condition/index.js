// COMPARISON OPERATORS
let bool = true;

// EQUAL TO
console.log("1 == 1", 1 == 1); // true
console.log("1 == '1'", 1 == "1"); // true, karena tipe data tidak diperiksa
// STRICT EQUAL TO
console.log("1 === 1", 1 === 1); // true
console.log("1 === '1'", 1 === "1"); // false, karena tipe data diperiksa
// NOT EQUAL TO
console.log("1 != 2", 1 != 2); // true
console.log("1 != '1'", 1 != "1"); // false, karena tipe data tidak diperiksa
// STRICT NOT EQUAL TO
console.log("1 !== 2", 1 !== 2); // true
console.log("1 !== '1'", 1 !== "1"); // true, karena tipe data diperiksa
// GREATER THAN
console.log("2 > 1", 2 > 1); // true
console.log("1 > 2", 1 > 2); // false
// LESS THAN
console.log("1 < 2", 1 < 2); // true
console.log("2 < 1", 2 < 1); // false
// GREATER THAN OR EQUAL TO
console.log("2 >= 1", 2 >= 1); // true
console.log("1 >= 2", 1 >= 2); // false
console.log("1 >= 1", 1 >= 1); // true
// LESS THAN OR EQUAL TO
console.log("1 <= 2", 1 <= 2); // true
console.log("2 <= 1", 2 <= 1); // false
console.log("1 <= 1", 1 <= 1); // true
// LOGICAL OPERATORS
console.log("true && true", true && true); // true
console.log("true && false", true && false); // false
console.log("false && true", false && true); // false
console.log("false && false", false && false); // false
//IF STATEMENT
let kondisi = "C";
kondisi = "B";
kondisi = "A";
if (kondisi === "A") {
  console.log("Kondisi A terpenuhi");
} else if (kondisi === "B") {
  console.log("Kondisi B terpenuhi");
} else if (kondisi === "C") {
  console.log("Kondisi C terpenuhi");
} else {
  console.log("Tidak ada kondisi yang terpenuhi");
}

if (kondisi === "B") {
  console.log("Kondisi A terpenuhi");
} else {
  console.log("Tidak terpenuhi");
}

// TERNARY OPERATOR
let nilai = 75;
let hasil = nilai >= 75 ? "Lulus" : "Tidak Lulus";
console.log("Hasil:", hasil);

console.log(nilai === 75 ? "Lulus" : "Tidak Lulus"); // Output: "Lulus"
// SWITCH STATEMENT
let hari = 3;
switch (hari) {
  case 1:
    console.log("Hari Senin");
    break;
  case 2:
    console.log("Hari Selasa");
    break;
  case 3:
    console.log("Hari Rabu");
    break;
  case 4:
    console.log("Hari Kamis");
    break;
  case 5:
    console.log("Hari Jumat");
    break;
  case 6:
    console.log("Hari Sabtu");
    break;
  case 7:
    console.log("Hari Minggu");
    break;
  default:
    console.log("Hari tidak valid");
}

// TRUTHY AND FALSY VALUES
let falsyValue = 0; // Falsy value
let truthyValue = "Hello"; // Truthy value
console.log("Falsy value:", !!falsyValue); // Output: false
console.log("Truthy value:", !!truthyValue); // Output: true

console.log(Boolean(" "));
console.log(Boolean("b"));
console.log(Boolean(29));

console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN)); // Output: false

let input = "Hello";
input = "";
input = null;
input = undefined;
input = 6782;
input = 0;
if (input) {
  console.log(`Input kamu ${input}`);
} else {
  console.log("Input belum ada");
}
if (!input) {
  console.log("Input belum ada");
} else {
  console.log(`Input kamu ${input}`);
}

//LOOPING
// FOR LOOP
for (let i = 3; i > 0; i--) {
  console.log("Perulangan ke:", i);
}
//WHILE LOOP
let j = 3;
while (j > 0) {
  console.log(j);
  j--;
}
// DO-WHILE LOOP
let k = 3;
do {
  console.log(k);
  k--;
} while (k > 0);

//BREAK AND CONTINUE
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping number 3");
    continue; // Melewati iterasi ketika i adalah 3
  }
  console.log("Current number:", i);
}
// BREAK
for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    console.log("Breaking at number 4");
    break; // Menghentikan loop ketika i adalah 4
  }
  console.log("Current number:", i);
}
//BREAK2
let c = 1;
while (true) {
  console.log(c);
  if (c === 1000) break;
  c++;
}
// CONTINUE2
for (let p = 1; p <= 10; p++) {
  if (p % 2 === 0) {
    continue; // Melewati angka genap
  }
  console.log("Angka ganjil:", p);
}
