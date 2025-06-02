// DATA ARRAY

//Array adalah tipe data yang digunakan untuk menyimpan sekumpulan nilai dalam satu variabel. Array dapat menyimpan berbagai tipe data, termasuk angka, string, objek, dan bahkan array lainnya. Array di JavaScript dimulai dari indeks 0.
// Array dapat dibuat menggunakan tanda kurung siku [] dan elemen-elemen di dalamnya
// dipisahkan oleh koma. Berikut adalah beberapa contoh penggunaan array di JavaScript:
let fruits = ["apple", "banana", "cherry"];
let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, "two", true, null, { key: "value" }, [6, 7]];
// Array dapat diakses menggunakan indeks, di mana indeks pertama adalah 0.
console.log(fruits[0]); // Output: "apple"
console.log(numbers[2]); // Output: 3
console.log(mixedArray[3]); // Output: null
// Array juga memiliki berbagai metode yang memungkinkan kita untuk melakukan operasi seperti menambahkan, menghapus, atau mengubah elemen. Berikut adalah beberapa metode umum yang digunakan dengan array:
// 1. push() - Menambahkan elemen ke akhir array
fruits.push("orange");
console.log(fruits); // Output: ["apple", "banana", "cherry", "orange"]
// 2. pop() - Menghapus elemen terakhir dari array
fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "cherry"]
// 3. unshift() - Menambahkan elemen ke awal array
fruits.unshift("kiwi");
console.log(fruits); // Output: ["kiwi", "apple", "banana", "cherry"]
// 4. shift() - Menghapus elemen pertama dari array
fruits.shift();
console.log(fruits); // Output: ["apple", "banana", "cherry
// 5. splice() - Menambahkan atau menghapus elemen pada indeks
fruits.splice(1, 1, "grape"); // Mengmenghapus elemen pada indeks 1 dan menambahkan "grape"
console.log(fruits); // Output: ["apple", "grape", "banana", "cherry"]
// 6. slice() - Mengambil sebagian elemen dari array
let slicedFruits = fruits.slice(1, 3); // Mengambil elemen dari indeks 1 hingga 2
console.log(slicedFruits); // Output: ["grape", "banana"]
// 7. indexOf() - Mencari indeks dari elemen tertentu
let index = fruits.indexOf("banana");
console.log(index); // Output: 2 (indeks dari "banana")
// 8. forEach() - Melakukan iterasi pada setiap elemen array
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});

const angka = [];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  angka.push(i + 1);
}
console.log(angka); // Output: [1, 2, 3, 4]

//forEach() - Melakukan iterasi pada setiap elemen array
fruits.forEach((data) => console.log(data));
// Output: "apple", "banana", "cherry"
//map() - Membuat array baru dengan hasil dari fungsi yang diterapkan pada setiap elemen
const loop = fruits.map((data) => data);
console.log(loop); // Output: ["apple", "banana", "cherry"]
// Output: "apple", "banana", "cherry"

for (let buah of fruits) {
  console.log(buah);
  console.log(buah.toUpperCase());
}

