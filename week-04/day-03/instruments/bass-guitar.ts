import { StringedInstrument } from "./stringedinstrument";

'use strict';

export class BassGuitar extends StringedInstrument {
  howdoesitSound: string;

  constructor(numberOfStrings: number = 4) {
    super();
    this.name = 'Bass Guitar';
    this.numberOfStrings = numberOfStrings;
    this.howdoesitSound = 'Duum-duum-duum';

  }
  sound(): string {
    return this.howdoesitSound;
  }

  play() {
    return super.play()
  }
}
