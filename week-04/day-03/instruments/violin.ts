import { StringedInstrument } from "./stringedinstrument";

'use strict';
export class Violin extends StringedInstrument {
  howdoesitSound: string;

  constructor(numberOfStrings: number = 4) {
    super();
    this.name = 'Violin';
    this.numberOfStrings = numberOfStrings;
    this.howdoesitSound = 'Screech';

  }
  sound(): string {
    return this.howdoesitSound;
  }

  play() {
    return super.play()
  }
}
