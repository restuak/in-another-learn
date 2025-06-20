// Kelas Player
class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }

  // Mengurangi health saat terkena hit
  hit(power) {
    this.health -= power;
    console.log(`${this.name} terkena serangan sebesar ${power} poin!`);
  }

  // Menggunakan item untuk menambah health atau power
  useItem(item) {
    if (item.health > 0) {
      console.log(`${this.name} mendapatkan item kesehatan +${item.health}`);
    }

    if (item.power > 0) {
      console.log(`${this.name} mendapatkan item kekuatan +${item.power}`);
    }

    this.health += item.health;
    this.power += item.power;
  }

  // Menampilkan status pemain
  showStatus() {
    console.log(
      `${this.name} (Health => ${this.health}, Power => ${this.power})`
    );
  }

  // Mengecek apakah masih hidup
  isAlive() {
    return this.health > 0;
  }
}

// Kelas ShootingGame
class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  // Menghasilkan item secara acak
  getRandomItem() {
    const health = Math.random() < 0.5 ? 0 : 10;
    const power = Math.random() < 0.5 ? 0 : 10;
    return { health, power };
  }

  // Memulai permainan
  start() {
    let turn = 1;
    console.log("=== PERMAINAN DIMULAI ===");

    while (this.player1.isAlive() && this.player2.isAlive() > 0) {
      console.log(`PERMAINAN KE-${turn}`);

      // Menampilkan status sebelum item
      console.log("Status sebelum mendapatkan item:");
      this.player1.showStatus();
      this.player2.showStatus();

      // Pemain mendapatkan item
      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();
      console.log(`Item yang didapatkan:`);
      this.player1.useItem(item1);
      this.player2.useItem(item2);

      // Serangan dimulai
      console.log(`Serangan dimulai:`);
      this.player2.hit(this.player1.power);
      this.player1.hit(this.player2.power);

      // Menampilkan status setelah serangan
      console.log("Status setelah serangan:");
      this.player1.showStatus();
      this.player2.showStatus();

      turn++;
    }

    console.log("\n=== PERMAINAN SELESAI ===");

    // Menentukan pemenang
    if (this.player1.isAlive() && !this.player2.isAlive()) {
      console.log(`Pemenangnya adalah: ${this.player1.name}`);
    } else if (!this.player1.isAlive() && this.player2.isAlive()) {
      console.log(`Pemenangnya adalah: ${this.player2.name}`);
    } else {
      console.log("Permainan berakhir seri! Kedua pemain kalah.");
    }
  }
}

// Inisialisasi dan jalankan permainan
const playerA = new Player("Player A");
const playerB = new Player("Player B");

const game = new ShootingGame(playerA, playerB);
game.start();
