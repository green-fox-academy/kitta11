import { StringedInstrument } from "./stringedinstrument";
'use strict'

class ElectricGuitar extends StringedInstrument {

  constructor() {
    super()
    this.numberOfStrings = 6;
  }
  play(): void {
    console.log('Twang');
  }

}