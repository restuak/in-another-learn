// console -> mengacu pada sebuah terminal
// .log -> sebuah console bisa membuat sebuah logging (catatan)
// "Hello Wordl" -> sebuah catatannya
// ; -> akhir sebuah syntax

console.log("Hello World, saya baru coba JS");
// VAR CONST: Isi tidak bisa dirubah lagi setelah diisi
const kotakSepatuAdidas = "Adidas";
console.log(kotakSepatuAdidas);

// VAR LET: Isi bisa dirubah setelah diisi
let kotakSepatuNike = "Nike";
console.log(kotakSepatuNike);

kotakSepatuNike = "Nike 2";
console.log(kotakSepatuNike);

// VAR VAR: Untuk membuat global variabel, hampir tidak pernah digunakan
var kotakSepatuPuma = "Puma";
var kotakSepatuPuma = "Puma 2";
console.log(kotakSepatuPuma);

// JENIS DATA
const _string = "Ini data string apa aja bisa";
console.log(_string);

const _number = 23.2345;
console.log(_number);

const _boolean = true;
console.log(_boolean);

const _null = null;
console.log(_null);

let _und;
console.log(_und);

let _cobatipe = "jskdfhkjh23147 uhn";
console.log(typeof _cobatipe);

let hariIni = new Date("");
console.log(hariIni);

let date1 = new Date("2022-01-20");
let date2 = new Date("2022-01-22");
let selisih = date2.getFullYear();
let beda = selisih / (1000 * 3600 * 24);
console.log("Selisih hari", selisih);

// BUILT METHODS
let nama = "Budi";
let namaKecil = nama.toLowerCase();
let namaBesar = nama.toUpperCase();
console.log("Nama kecil", namaKecil);
console.log("Nama besar", namaBesar);

const $date = new Date();
console.log($date.getHours());
console.log($date.getMinutes());
console.log($date.getSeconds());
console.log($date.getMilliseconds());
console.log($date.getFullYear());
console.log($date.getMonth() + 1); // Bulan dimulai dari 0
console.log($date.getDate());
console.log($date.getDay()); // Hari dimulai dari 0 (Minggu)
console.log($date.getTime()); // Waktu dalam milidetik sejak 1 Januari 1970
console.log($date.toLocaleDateString("id-ID")); // Format tanggal Indonesia
console.log($date.toLocaleTimeString("id-ID")); // Format waktu Indonesia
console.log($date.toLocaleString("id-ID")); // Format tanggal dan waktu Indonesia
console.log($date.toISOString()); // Format ISO 8601
console.log($date.toString()); // Format string standar
console.log($date.toUTCString()); // Format UTC string
console.log($date.toLocaleString("en-US")); // Format tanggal dan waktu Amerika
console.log($date.toLocaleDateString("en-US")); // Format tanggal Amerika
console.log($date.toLocaleTimeString("en-US")); // Format waktu Amerika
console.log($date.getTimezoneOffset()); // Selisih zona waktu dalam menit
console.log($date.getUTCFullYear()); // Tahun dalam UTC
console.log($date.getUTCHours()); // Jam dalam UTC
console.log($date.getUTCMinutes()); // Menit dalam UTC
console.log($date.getUTCSeconds()); // Detik dalam UTC
console.log($date.getUTCMilliseconds()); // Milidetik dalam UTC
console.log($date.getUTCDate()); // Tanggal dalam UTC
console.log($date.getUTCMonth() + 1); // Bulan dalam UTC (dimulai dari 0)
console.log($date.getUTCDay()); // Hari dalam UTC (dimulai dari 0, Minggu)

const number = 24;
console.log(number.toString().replace(24, "WEEKEND").toLowerCase());

//MATEMATIIKA

console.log(Math.PI); // Nilai Pi
console.log(Math.E); // Bilangan Euler
console.log(Math.abs(-5)); // Nilai absolut
console.log(Math.ceil(4.2)); // Pembulatan ke atas
console.log(Math.floor(4.8)); // Pembulatan ke bawah
console.log(Math.round(4.5)); // Pembulatan ke angka terdekat
console.log(Math.max(1, 2, 3, 4, 5)); // Nilai maksimum
console.log(Math.min(1, 2, 3, 4, 5)); // Nilai minimum
console.log(Math.random()); // Angka acak antara 0 dan 1
console.log(Math.sqrt(16)); // Akar kuadrat
console.log(Math.pow(2, 3)); // Pangkat (2^3)
console.log(Math.log(10)); // Logaritma natural
console.log(Math.log10(100)); // Logaritma basis 10
console.log(Math.sin(Math.PI / 2)); // Sinus
console.log(Math.cos(Math.PI)); // Kosinus
console.log(Math.tan(Math.PI / 4)); // Tangen
console.log(Math.asin(1)); // Arcsinus
console.log(Math.acos(0)); // Arcus kosinus
console.log(Math.atan(1)); // Arcus tangen
console.log(Math.atan2(1, 1)); // Arcus tangen dengan dua argumen
console.log(Math.hypot(3, 4)); // Jarak Euclidean (akar kuadrat dari jumlah kuadrat)
console.log(Math.sign(-5)); // Tanda dari angka (-1, 0, 1)
console.log(Math.clz32(0)); // Hitung jumlah bit nol di depan dalam representasi 32-bit
console.log(Math.imul(2, 3)); // Perkalian integer 32-bit
console.log(Math.fround(1.5)); // Pembulatan ke angka floating-point 32-bit
console.log(Math.trunc(4.9)); // Menghapus desimal (truncation)
console.log(Math.cbrt(27)); // Akar kubik
console.log(Math.log2(8)); // Logaritma basis 2
console.log(Math.log1p(0.5)); // Logaritma natural dari (1 + x)
console.log(Math.expm1(1)); // e^x - 1
console.log(Math.sinh(1)); // Sinus hiperbolik
console.log(Math.cosh(1)); // Kosinus hiperbolik
console.log(Math.tanh(1)); // Tangen hiperbolik
console.log(2 ** 3); // Pangkat 2^3

console.log("Hello World" + "saya baru coba JS lagi");
let i = "Hello World";
i += "saya baru coba JS lagi";
console.log(i);

console.log(getMonth);

let x = 5;
// PREFIX
console.log(++x); // Output: 6 (increment
console.log(x); // Output: 6 (nilai x setelah increment)
// POSTFIX
console.log(x++); // Output: 6 (nilai x sebelum increment)
console.log(x); // Output: 7 (nilai x setelah increment)

console.log(x);
console.log(x--); // Output: 7 (nilai x sebelum decrement)
console.log(x); // Output: 6 (nilai x setelah decrement)
console.log(--x); // Output: 5 (nilai x setelah decrement)
console.log(x); // Output: 5 (nilai x setelah decrement)
console.log((x += 2)); // Output: 7 (nilai x setelah penambahan 2)
console.log((x -= 2)); // Output: 5 (nilai x setelah pengurangan 2)
console.log((x *= 2)); // Output: 10 (nilai x setelah perkalian 2)
console.log((x /= 2)); // Output: 5 (nilai x setelah pembagian 2)
console.log((x %= 3)); // Output: 2 (nilai x setelah modulus 3)
console.log((x **= 2)); // Output: 4 (nilai x setelah pangkat 2)
console.log(x); // Output: 4 (nilai x setelah pangkat 2)
console.log(x == 4); // Output: true (perbandingan nilai)

//INCREMENT AND DECREMENT
// Menggunakan operator increment (++) dan decrement (--)
// Operator increment (++) menambah nilai variabel sebesar 1
// Operator decrement (--) mengurangi nilai variabel sebesar 1
// Contoh penggunaan operator increment dan decrement

// TEMPLATE LITERALS
let namaDepan = "Budi";
let namaBelakang = "Santoso";
let umur = 25;
let pesan = `Halo, nama saya ${namaDepan} ${namaBelakang} dan saya berumur ${umur} tahun.`;
console.log(pesan); // Output: Halo, nama saya Budi Santoso dan saya berumur 25 tahun.
// Menggunakan template literals untuk menyisipkan ekspresi
let a = 5;
let b = 10;
let hasil = `Hasil penjumlahan ${a} dan ${b} adalah ${a + b}.`;
console.log(hasil); // Output: Hasil penjumlahan 5 dan 10 adalah 15.
// Menggunakan template literals untuk membuat string multi-baris
let multiBaris = `Ini adalah contoh string
multi-baris
dengan template literals.`;
console.log(multiBaris);
// Output:
// Ini adalah contoh string
// multi-baris
// dengan template literals.
 