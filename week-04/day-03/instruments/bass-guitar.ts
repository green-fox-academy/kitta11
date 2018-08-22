import { StringedInstrument } from "./stringedinstrument";

'use strict';

export class BassGuitar extends StringedInstrument {
  howdoesitSound: string;

  constructor(numberOfStrings: number = 4) {
    super();
    this.name = 'Electric Guitar';
    this.numberOfStrings = numberOfStrings;
    this.howdoesitSound = 'Duum-duum-duum';

  }

  play() {
    return `${super.play()} that goes ${this.howdoesitSound}`;
  }
}
