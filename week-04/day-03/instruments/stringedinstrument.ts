import{Instrument} from "./instrument";

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;

  sound() {
    //but with the help of the sound() the play() method is fully implementable?
    this.play()
  }
}
