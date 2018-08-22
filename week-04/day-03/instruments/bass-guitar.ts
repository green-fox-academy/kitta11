import { StringedInstrument } from "./stringedinstrument";

'use strict';

class BassGuitar extends StringedInstrument {

  constructor() {
    super();
    this.numberOfStrings = 4;
  }
  play(): void {
    console.log('Duum-duum-duum');
  }
}