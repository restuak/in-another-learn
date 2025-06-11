//ANAGRAM
//PSEUDOCODE
    //buat fungsi input dua kata
    //panjang karakter harus sama
    //bikin var buat hitung jumlah huruf/karakter di dalam input
    //bandingkan input a dan b, kalau tidak sama atau ada karakter lain return ke false
    //selain itu true = anagram berhasil
    //console.log
    

function Anagram(a: string, b: string): boolean {
  if (a.length !== b.length) return false;

  const huruf= {};
  for (let kata of a) {
    huruf[kata] = (huruf[kata] || 0) + 1;
    console.log(kata)
  }
    console.log(huruf)

  for (let kata of b) {
    if (!huruf[kata]) return false;
    huruf[kata]--;
  }

  return true;
}

console.log(Anagram("budiwarsito", "buswitradio"));

//TANGGA
//PSEUDO
    //1 tangga 1 cara
    //2 tangga 2 cara
    //bikin fungsi kalau n kurang 2, ya hanya 2 cara
    //tangga ketiga pakai hasil yang udah diketahui secara kasat otak (1 dan 2)
    //bikin var buat nampung si ke-1 dan ke-2, a = 1 cara, b= 2 cara
    //ngerumusin tangga ke-n, rumusnya f(n) = f(n-1) + f(n-2).
    //iterasi terus, return ke b alias 2 angka sebelumnya


    function Tangga(n: number): number {
  if (n <= 2) return n;

  let a = 1, b = 2;

  for (let i = 3; i <= n; i++) {
    const frml = a + b;
    a = b;
    b = frml;
  }

  return b;
}

console.log(Tangga(10)); // Output: 2
console.log(Tangga(3)); // Output: 3
console.log(Tangga(8)); // Output: 8