import {readFromFile} from "../../../library/readfromfile"
'use strict';

export class Player {
  protected name: string;
  protected level: number;
  protected isFortunate: boolean;
  protected alcoholLevel: number;
  protected noOfRounds: number;
  protected noOfWins: number;

  constructor() {
    this.name = this.pickName();
    this.level = 1;
    this.isFortunate = this.fortuneGen()
    this.alcoholLevel = 0;
    this.noOfRounds = 0;
    this.noOfWins = 0;
  }

  fortuneGen(): boolean {
    return (Math.floor(Math.random() * 2) < 1)
  }

  playerInfoCard() {
    console.log(`
    Name: ${this.name}
    I am at ${this.level} level, my fortune is ${this.isFortunate},
    I am at ${this.alcoholLevel}, I am over of ${this.noOfRounds} game rounds
    and I won ${this.noOfWins}`)
  }

  getName() {
    return this.name
  }

  getLevel() {
    return this.level;
  }

  throwDart() {
    let actualPoint: number = 0;
    if (this.level < 2 || this.isFortunate===false || this.alcoholLevel >2){
    actualPoint = Math.floor((Math.random()*20)*Math.random())    
    } else if (this.isFortunate===true && this.alcoholLevel>2 ) {
      actualPoint = Math.floor((Math.random()*20))*3
    } else {
      actualPoint =  Math.floor((Math.random()*20))*Math.floor(Math.random()*3)
    }
    return actualPoint
  }
  pickName(){
    let fileContentArray: any[] = readFromFile('disney-princesses.txt').split('\n');
    return fileContentArray[Math.floor(Math.random()*fileContentArray.length)]
  }
}