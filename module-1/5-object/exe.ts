///EXERCISE
///Shooting Game

//Player
interface Player {
    name: string;
    health: number;
    power: number;
    hit: (power: number) => number;
    useItem: (item:number) => number;
    showStatus: () => string;
    playerLife: () => number;
}

class Player {
    name: string =;
    health: number = 100;
    power: number = 10;

    constructor(name: string, health: number, power: number){
        this.name = name;
        this.health = health;
        this.power = power;
    }

    hit(power: number) {
        this.health -= power;
        console.log(`Health ${this.name} minus ${power}`)
    }

    useItem(item:number) {
        this.health += item.health;
        this.power += item.power;
    }

    showStatus (): string {
        console.log(`${this.name} = Health: ${this.health} and Power: ${this.power}`)
    }

    playerLife (): number {
        return this.health > 0;
    }
}   

//Shooting
interface shootingGame {
    player1: string;
    player2: string:
    getRandom: (health: number, power: number) => number;
    start: () => string;

}

class shootingGame {
    player1: string;
    player2: string;

    constructor(player1: string, player2: string){
        this.player1 = player1
        this.player2 = player2
    }

    getRandom (): {health: number, power: number} {
        return {
            health: Math.random() < 0.5 ? 0 : 10,
            power: Math.random() < 0.5 ? 0 : 10,
        }
    }

    start (): number {
        let play = 1;
        while (this.player1.playerLife() && this.player2.playerLife() > 0) {
            console.log(`GAMES-${play}`);

            //status before shooting
            console.log("Status Player Before ");
            this.player1.showStatus();
            this.player2.showStatus();

            //get random item before shooting
            const itemP1 = this.getRandom();
            const itemP2 = this.getRandom();
            console.log("Get Random Item");
            this.player1.useItem(itemP1);
            this.player2.useItem(itemP2);

            //each player shooting
            console.log("Each Player Shooting");
            this.player1.hit(this.player1.power);
            this.player2.hit(this.player2.power);

            //status after shooting
            console.log("Status Player After Shooting");
            this.player1.showStatus();
            this.player2.showStatus();

            play++;
        }

        console.log("GAME OVER");
        if (this.player1.playerLife() && !this.player2.playerLife()) {
        console.log(`The Winner: ${this.player1.name}`);
        } else if (!this.player1.playerLife() && this.player2.playerLife()) {
        console.log(`The Winner: ${this.player2.name}`);
        } else {
        console.log("Game Seri");
        }
    }
}

//TO PLAY
const player1 = new Player("Player 1")
const player2 = new Player("Player 2")

const toPlay = new ShootingGame(player1, player2);
toPlay.start();