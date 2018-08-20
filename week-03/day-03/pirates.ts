'use strict';

class Pirate {
  pirateName: string;
  alcoholPower: number;
  isHeAlive: boolean;
  rumCapacity: number;

  constructor(pirateName: string = 'Calico Jack') {
    this.pirateName = pirateName;
    this.isHeAlive = true;
    this.rumCapacity = 4;
  }

  drinkSomeRum() {
    if (this.isHeAlive) {
      if (this.rumCapacity > 0) {
        this.rumCapacity--
      }
    } else {
      console.log(`He is dead`)
    }
  }

  howsItGoingMate() {
    if (this.isHeAlive) {
      if (this.rumCapacity > 0) {
        console.log(`Pour me anudder!`);
      } else {
        console.log(`Arghh, I'ma Pirate. How d'ya d'ink its goin?`);
      }
    } else {console.log('He is dead');
    }
  }

  die() {
    this.isHeAlive = false;

  }

  brawl(x) {

  }

}

let pirateOne: Pirate = new Pirate();
let pirateTwo: Pirate = new Pirate('Naive Winmore');
console.log(pirateOne, pirateTwo);

for (let i = 0; i < 4; i++) {
  pirateOne.drinkSomeRum();
}

console.log(pirateOne, pirateTwo);

pirateOne.howsItGoingMate();
pirateTwo.howsItGoingMate();
console.log(pirateOne, pirateTwo);

pirateTwo.die()
pirateTwo.drinkSomeRum();
pirateTwo.howsItGoingMate();
console.log(pirateOne, pirateTwo);

