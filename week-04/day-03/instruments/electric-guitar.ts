import { StringedInstrument } from "./stringedinstrument";
'use strict';

export class ElectricGuitar extends StringedInstrument {
  howdoesitSound: string;

  constructor(numberOfStrings: number = 6) {
    super();
    this.name = 'Electric Guitar';
    this.numberOfStrings = numberOfStrings;
    this.howdoesitSound = 'Twang';

  }

  play() {
    return `${super.play()} that goes ${this.howdoesitSound}`;
  }
}
