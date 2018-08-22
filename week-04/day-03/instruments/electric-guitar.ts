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
//how can I log this by default in order to accomplish the test case 
//(console.log cause a conflict in output type)
  play() {
    return `${super.play()} that goes ${this.howdoesitSound}`;
  }
}