//SHOOTING GAME
// This code implements a simple shooting game where two players take turns shooting each other.
interface Player {
  name: string;
  health: number;
  power: number;
}
class Player {
  name: string;
  health: 100;
  power: 10;

  constructor(name: string, health: number, power: number) {
    this.name = name;
    this.health = health;
    this.power = power;
  }
}

hit(power: number) {
  this.health -= power;
}

useItem(item: { health: number; power: number }) {
  this.health += item.health;
  this.power += item.power;
}

shoWsStatus() {
  console.log(`${this.name} ("Health" => ${this.health}, "Power" => ${this.power})`);
}
//SHOOTING
interface ShootingGame {
  player1: string;
  player2: string;
}
class ShootingGame {
  player1: Player;
  player2: Player;
}
    constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;

}

getRandomItem(): { health = 0 || 10; power = 0 || 10 } {
  return {
    health: Math.random();
    power: Math.random();
  };
}

startGame() {
  
//////////////////////////////////////////////////////////////////////// Player.ts
class Player {
  name: string;
  health: number = 100;
  power: number = 10;

  constructor(name: string) {
    this.name = name;
  }

  hit(power: number) {
    this.health -= power;
  }

  useItem(item: { health: number; power: number }) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    console.log(${this.name} (Health => ${this.health}, Power => ${this.power}));
  }

  isAlive(): boolean {
    return this.health > 0;
  }
}

// ShootingGame.ts
class ShootingGame {
  player1: Player;
  player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem(): { health: number; power: number } {
    return {
      health: Math.random() < 0.5 ? 0 : 10,
      power: Math.random() < 0.5 ? 0 : 10,
    };
  }

  start() {
    let turn = 1;
    console.log("=== Game Start ===");

    while (this.player1.isAlive() && this.player2.isAlive()) {
      console.log(\n=== Turn ${turn} ===);

      // Show status before shooting
      this.player1.showStatus();
      this.player2.showStatus();

      // Each player gets random item
      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();
      this.player1.useItem(item1);
      this.player2.useItem(item2);

      console.log(\nItems Applied:);
      console.log(${this.player1.name} gets item: ${JSON.stringify(item1)});
      console.log(${this.player2.name} gets item: ${JSON.stringify(item2)});

      // Each player takes a shot
      this.player2.hit(this.player1.power);
      this.player1.hit(this.player2.power);

      // Show status after shooting
      console.log(\nStatus After Shooting:);
      this.player1.showStatus();
      this.player2.showStatus();

      turn++;
    }

    console.log("\n=== Game Over ===");
    if (this.player1.isAlive() && !this.player2.isAlive()) {
      console.log(Winner: ${this.player1.name});
    } else if (!this.player1.isAlive() && this.player2.isAlive()) {
      console.log(Winner: ${this.player2.name});
    } else {
      console.log("It's a draw!");
    }
  }
}

// index.ts (Entry point)
const playerA = new Player("Player A");
const playerB = new Player("Player B");

const game = new ShootingGame(playerA, playerB);
game.start();