//FUNCTION
// Function adalah blok kode yang dapat digunakan kembali untuk melakukan tugas tertentu. Fungsi dapat menerima parameter dan mengembalikan nilai. Berikut adalah beberapa contoh penggunaan fungsi di JavaScript:

// FUNCTION DECLARATION
function tambah(a, b) {
  console.log(a + b);
  console.log(a - b);
}
//PEMANGGILAN FUNCTION
tambah(3, 8);
tambah(2, 1);
tambah(4, 2);
tambah(8, 9);

function tambah(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Parameter harus berupa angka");
  } else {
    console.log(a + b);
  }
}
//PEMANGGILAN FUNCTION
tambah(3, 8);
tambah("a", 8); // Output: "Parameter harus berupa angka"

// FUNCTION EXPRESION
const kurang = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Parameter harus berupa angka");
  } else {
    console.log(a - b);
  }
};

//ARROW FUNCTION
const kali = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Parameter harus berupa angka");
  } else {
    console.log(a * b);
  }
};

//RETURN STATEMENT
function bagi(a, b) {
  return a / b;
}
let hasilBagi = bagi(10, 2);
console.log(hasilBagi); // Output: 5

//DEFAULT PARAMETERS
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Output: "Hello, Guest!"
greet("Alice"); // Output: "Hello, Alice!"

function modulo(a, b = 5) {
  return a % b;
}
console.log(modulo(10)); // Output: 0 (default b is 5)
console.log(modulo(10, 3)); // Output: 1 (b is 3)

//REST PARAMETERS
function message(a, b, ...c) {
  console.log(a, "ini a");
  console.log(b, "ini b");
  console.log(c, "ini c");
}
console.log(message("Hello", "World", "This", "is", "a", "test"));
