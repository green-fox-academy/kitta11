import { Animal } from "./animal";
import { Mammal } from "./mammal";
import { Reptile } from "./reptile";
import { Bird } from "./bird";

'use strict';

let reptileOne = new Reptile("Crocodile");
let reptileTwo = new Reptile("Cruel Crocodile", true);
let mammalOne = new Mammal("Koala");
let mammalTwo = new Mammal("Bear", 3);
let birdOne = new Bird("Parrot");
let birdTwo = new Bird("Pinguin", false);


console.log('*******---*******')
console.log("How do you breed?");
console.log('*******---*******')

console.log("A " + reptileOne.getName() + " is breeding by " + reptileOne.breed());
console.log('-----------------')
console.log("A " + reptileTwo.getName() + " is breeding by " + reptileTwo.breed());
console.log('-----------------')
console.log("A " + mammalOne.getName() + " is breeding by " + mammalOne.breed());
console.log('-----------------')
console.log("A " + mammalTwo.getName() + " is breeding by " + mammalTwo.breed());
console.log('-----------------')
console.log("A " + birdOne.getName() + " is breeding by " + birdOne.breed());
console.log('-----------------')
console.log("A " + birdTwo.getName() + " is breeding by " + birdTwo.breed());


console.log('*******---*******')
console.log("Hey BIRD! Can you fly?");
console.log('*******---*******')

birdOne.takeOff()
console.log('-----------------')
birdTwo.takeOff()
console.log('-----------------')
birdOne.fly();
console.log('-----------------')
birdTwo.fly();
console.log('-----------------')
birdOne.land()
console.log('-----------------')
birdTwo.land()


console.log('*******---*******')
console.log("Lets feed them");
console.log('*******---*******')

mammalOne.feed()
console.log('-----------------')
mammalTwo.feed()
console.log('-----------------')
reptileOne.feed()
console.log('-----------------')
reptileTwo.feed()
console.log('-----------------')
birdOne.feed()
console.log('-----------------')
birdTwo.feed()
