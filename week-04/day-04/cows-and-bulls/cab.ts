'use strict';

export class CowsAndBulls {
  protected tobeGuessedNo: number;
  protected stateOfGame: string;
  protected noOfGuesses: number;
  protected noOfCows: number;
  protected noOfBulls: number;

  constructor() {
    this.tobeGuessedNo = Math.floor(Math.random() * 10000);
    this.stateOfGame = 'notplayed';
    this.noOfGuesses = 0;
    this.noOfCows = 0;
    this.noOfBulls = 0;
  }

  getStateOfGame() {
    if (this.noOfGuesses > 0) {
      this.stateOfGame = 'playing'
    }
    return this.stateOfGame
  }

  guess(guessedNo: number) {
    let tobeGuessedNoToString = this.tobeGuessedNo.toString()
    let playerGuessedNoTostring = guessedNo.toString()
    for (let i = 0; i < tobeGuessedNoToString.length; i++) {
      if (tobeGuessedNoToString[i] === playerGuessedNoTostring[i]) {
        this.noOfCows++
        console.log(`you guessed ${i}th item correctly`)
      } else {
        this.noOfBulls++
        console.log(`you guessed ${i}th item wrongly`)
      }
    }
    this.noOfGuesses++
  }
}
