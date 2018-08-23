import { Player } from "./player";
'use strict'

export class Game {
  numberofRounds: number;
  startingPoint: number;
  numberofPlayers: number;
  players: Player[];

  constructor(numberofRounds: number = 40, startingPoint: number = 250, numberofPlayers: number = 4) {
    this.numberofRounds = numberofRounds;
    this.startingPoint = startingPoint;
    this.numberofPlayers = numberofPlayers
    this.players = [];
  }

  startGame() {
    for (let i = 0; i < this.numberofPlayers; i++) {
      this.players.push(new Player());
    }
    this.players.forEach(element => {
      element.startGameSetting(this.startingPoint)
    });
  }
  getGamePlayers() {
    this.players.forEach(element => {
      element.playerBeforeRoundCard()
    });
  }

  getPlayersCard() {
    this.players.forEach(element => {
      element.playerInfoCard()
    });
  }

  getGameInfo() {
    console.log(`This game has ${this.numberofRounds} rounds, ${this.numberofPlayers} players and starts from ${this.startingPoint} point`);
  }

  play() {
    while (this.players.every(element => { return element.getCurrentPoint() > 0 }) && this.numberofRounds > 0 ) {
      console.log(`REMAINING NUMBER OF ROUNDS ${this.numberofRounds}`)
      this.players.forEach(element => {
        element.throwDart();
      })
    this.numberofRounds--;
    }
  }

  getWinner(){
    let sortedPlayers = this.players.sort(function (a: Player, b: Player): number {
      return a.getCurrentPoint()-b.getCurrentPoint()
  })
    return sortedPlayers[0]
}
}
