import { Player } from "./player";
'use strict'

export class Game {
  numberofRounds: number;
  startingPoint: number;
  numberofPlayers: number;
  players: Player[];
  winner: Player;

  constructor(numberofRounds: number = 10, startingPoint: number = 250, numberofPlayers: number = 4) {
    this.numberofRounds = numberofRounds;
    this.startingPoint = startingPoint;
    this.numberofPlayers = numberofPlayers
    this.players = [];
  }

  startGame() {
    for (let i = 0; i < this.numberofPlayers; i++) {
      this.players.push(new Player());
    }
  }
  getGamePlayers() {
    this.players.forEach(element => {
      element.playerInfoCard()
    });
  }

  getGameInfo(){
    console.log(`This game has ${this.numberofRounds} rounds, ${this.numberofPlayers} players and starts from ${this.startingPoint} point`);    
  }

}