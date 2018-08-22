import { Vehicle } from "./vehicle";
import { Flyable } from "./flyable";
import { Helicopter } from "./helicopter";

'use strict';

let heliOne: Helicopter = new Helicopter('Bravo', 10);
let heliTwo: Helicopter = new Helicopter('Eagle', 14, 1500);


console.log('*****I N F O C A R D****');
console.log('*****---------------****');

heliOne.getInfoCard();
console.log('------------------------');
heliTwo.getInfoCard();


console.log('*****B o a r d i n g and t a k e o f f****');
console.log('*****---------------****');
heliOne.board(12);
console.log('------------------------');
heliOne.board(6);
console.log('------------------------');
heliOne.takeOff()
console.log('------------------------');
heliTwo.takeOff()
console.log('------------------------');
heliTwo.board(14)

console.log('*****I N F O C A R D****');
console.log('*****---------------****');

heliOne.getInfoCard();
console.log('------------------------');
heliTwo.getInfoCard();

console.log('********* F L Y ********');
console.log('*****---------------****');
heliOne.fly(1600)
console.log('------------------------');
heliTwo.fly(1000)

console.log('******** L A N D *******');
console.log('*****---------------****');
heliOne.land()
console.log('------------------------');
heliTwo.land()


