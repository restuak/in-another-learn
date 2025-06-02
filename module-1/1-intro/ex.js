// EXERCISE
//========================================================================================
// 1. Write a code to find area of rectangle.
// Example : length = 5, width = 3
// Output : 15
let pj = 5;
let lb = 3;
const luas = pj * lb;
console.log("Luas adalah", luas);
//========================================================================================
// 2. Write a code to find perimeter of rectangle.
// Example : length = 5, width = 3
// Output : 16
const keliling = 2 * (pj + lb);
console.log("Keliling adalah", keliling);
//========================================================================================
// 3. Write a code to find diameter, circumference and area of a circle.
// Example : radius = 5
// Output : diameter = 10, circumference = 31.4159, area = 78.539
let rad = 5;
const di = 2 * rad;
const kll = 2 * Math.PI * rad;
const area = Math.PI * rad * rad;
console.log("Diameter adalah", di);
console.log("Keliling adalah", kll);
console.log("Luas adalah", area);
//========================================================================================
// 4. Write a code to find angles of triangle if two angles are given.
// Example : a = 80, b = 65
// Output : 35
let a = 80;
let b = 65;
const c = 180 - (a + b);
console.log("Sudut yg lain", c, "derajat");
//========================================================================================
// 6. Write a code to get difference between dates in days.
// Example : date1 = 2022-01-20, date2 = 2022-01-22
// Output : 2
let d1 = new Date("2022-01-20");
let d2 = new Date("2022-01-22");
const selisih = d2.getTime() - d1.getTime();
const bedaHari = selisih / (1000 * 60 * 60 * 24);
console.log("Selisih", bedaHari, "hari");
//========================================================================================
// 5. Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// Example : 400 days → 1 year, 1 month, 5 days
// Example: 366 days → 1 year, 0 month, 1 day
let HariTot = 458;
const thn = Math.floor(HariTot / 365);
const bln = Math.floor((HariTot % 365) / 30);
const hari = (HariTot % 365) % 30;
console.log(
  HariTot,
  " hari = ",
  thn,
  " tahun, ",
  bln,
  " bulan, ",
  hari,
  " hari"
);
//========================================================================================
