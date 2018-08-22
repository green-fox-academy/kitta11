import { StringedInstrument } from "./stringedinstrument";

'use strict';
class Violin extends StringedInstrument {

  constructor() {
    super();
    this.numberOfStrings = 4

  }
  play(): void {
    console.log('Screech');
    ;
  }

}