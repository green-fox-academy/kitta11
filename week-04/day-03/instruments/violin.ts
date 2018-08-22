import { StringedInstrument } from "./stringedinstrument";

'use strict';
export class Violin extends StringedInstrument {
  howdoesitSound: string;

  constructor(numberOfStrings: number = 4) {
    super();
    this.name = 'Electric Guitar';
    this.numberOfStrings = numberOfStrings;
    this.howdoesitSound = 'Screech';

  }

  play() {
    return `${super.play()} that goes ${this.howdoesitSound}`;
  }
}
