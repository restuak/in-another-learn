// COMPARISON OPERATORS
let boool = true;

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
let nilai2 = 75;
let hasil = nilai2 >= 75 ? "Lulus" : "Tidak Lulus";
console.log("Hasil:", hasil);

console.log(nilai2 === 75 ? "Lulus" : "Tidak Lulus"); // Output: "Lulus"
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

let input2 = "Hello";
input2 = "";
input2 = null;
input2 = undefined;
input2 = 6782;
input2 = 0;
if (input2) {
  console.log(`Input kamu ${input2}`);
} else {
  console.log("Input belum ada");
}
if (!input2) {
  console.log("Input belum ada");
} else {
  console.log(`Input kamu ${input2}`);
}
//=================================================================================================
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

console.log("Loop selesai");




//=================================================================================
//===================================================================================
// COMPARISON OPERATORS
let bool = true;

// EQUAL TO / SAMA DENGAN
// HANYA MEMBACA VALUE TANPA MEMBACA TIPE DATANYA
console.log(5 == "5");
console.log("apel" == "Apel");

// STRICT EQUAL TO / SAMA DENGAN
// MEMBACA VALUE DAN TIPE DATANYA
console.log(5 === "5");

// NOT EQUAL TO / TIDAK SAMA DENGAN
console.log(5 != 5);

// STRICT NOT EQUAL TO
console.log(5 !== "5");
console.log("apel" !== "jeruk"); // APAKAH APEL BEDA DENGAN JERUK = TRUE / BENAR APEL BERBEDA DENGAN JERUK
console.log("apel" === "jeruk"); // APAKAH APEL SAMA DENGAN JERUK = false // SALAH APEL BERBEDA DENGAN JERUK

// GREATER THAN
console.log(5 > 6); // APAKAH 5 LEBIH BESAR DARI 6 = FALSE
console.log(5 > 5); // APAKAH 5 LEBIH BESAR DARI 5 = FALSE

// GREATER THAN OR EQUAL TO
console.log(5 >= 5); // APAKAH 5 LEBIH BESAR DARI 5 ATAU APAKAH 5  SAMA DENGAN 5 = TRUE

// LESS THAN
console.log(5 < 6); // APAKAH 5 LEBIH KECIL DARI 6 = TRUE
console.log(5 < 5); // APAKAH 5 LEBIH KECIL DARI 5 = FALSE

// LESS THAN OR EQUAL TO
console.log(5 <= 5); // APAKAH 5 LEBIH KECIL DARI 5 ATAU APAKAH 5 SAMA DENGAN 5 = TRUE

// IF
let nilai = "B";

if (nilai === "B") console.log("Good Result");

if (nilai === "C") {
  console.log("Standard Result");
  console.log("Nilai diperbaiki");
}

// ELSE
nilai = "C";
if (nilai === "A") {
  console.log("Excellent Result");
} else {
  console.log("Diperbaiki");
}

// TERNARY OPERATOR ATAU PENYINGKATAN PENULISAN IF ELSE
console.log(nilai === "A" ? "Excellent Result" : "Diperbaiki");

// ELSE IF
if (nilai === "A") {
  console.log("Excellent Result");
} else if (nilai === "B") {
  console.log("Good Result");
} else if (nilai === "C") {
  console.log("Average Result");
} else {
  console.log("Diperbaiki");
}

let angka = 9;

if (angka % 2 === 0) {
  console.log("Genap");
} else {
  console.log("Ganjil");
}

// SWITCH / CASE
nilai = "B";
switch (nilai) {
  case "A": // A === A
    console.log("Excellent Result");
    break;
  case "B":
    console.log("Good Result");
    break;
  case "C":
    console.log("Average Result");
    break;
  default:
    console.log("Poor Result");
}

// TRUTHY AND FALSY

// TRUTHY
console.log(Boolean(" "));
console.log(Boolean("b"));
console.log(Boolean(10));

// FALSY
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));

let input = "asd";
console.log(Boolean(input));
if (input) {
  // JIKA INPUT === TRUE
  console.log(`input kamu ${input}`);
} else {
  console.log("Harap masukkan input");
}
// !false, value akan dibalik true
// !true, value akan dibalik false
if (!input) {
  /// JIKA INPUT === FALSE
  console.log("Harap masukkan input");
} else {
  console.log(`input kamu ${input}`);
}
//=================================================================================================
// LOOP

// FOR LOOP
// STEP FOR LOOP:
// 1. statement 1 (membuat atau mengupdate sebuah variable)
// 2. statement 2 pengecekan condition
// 3. jika condition statement ke 2 true maka block of code dijalankan
// 4. statement 3 melakukan increment atau decrement postfix
// 5. ulang dari step 2

for (let a = 11; a <= 10; a++) {
  // BLOCK OF CODE
  console.log(a, "INI FOR LOOP");
}

// console.log(i); <- Error, tidak bisa menggunakan variable yang dibuat didalam for loop

// console.log(11 <= 10);

// WHILE LOOP
let i = 11;

// step while loop:
// 1. pengecekan condition
// 2. jika pengecekan condition true maka jalankan block of code
// 3. ulang dari step 1
while (i <= 10) {
  // BLOCK OF CODE
  console.log(i, "INI WHILE LOOP");

  i++;
}

// DO WHILE LOOP
// AKAN BERJALAN MINIMAL 1KALI
i = 11;

// step do while loop:
// 1. jalankan block of code didalam do
// 2. pengecekan condition
// 3. jika pengecekan condition true maka ulang step 1

do {
  // BLOCK OF CODE
  console.log(i, "INI DO WHILE LOOP");

  i++;
} while (i <= 10);

// BREAK

let x = 1;

while (true) {
  // BLOCK OF CODE
  console.log(x);

  if (x === 10000) break;

  x++;
}

// CONTINUE

for (let y = 1; y <= 10; y++) {
  if (y % 2 === 0) {
    // AKAN MENJALANKAN BLOCK OF CODE IF JIKA ANGKA GENAP
    continue;
  }

  // CODE DIBAWAH AKAN DIJALANKAN JIKA IF DIATAS MERETURN FALSE
  console.log(y);
}

console.log("test");