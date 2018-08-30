import { Garden } from "./garden";
import { Flower } from "./flower";
import { Tree } from "./tree";

'use strict'

let myGarden: Garden = new Garden;
let yellowFlower: Flower= new Flower('yellow')
let blueFlower: Flower= new Flower('blue')
let purpleTree: Tree= new Tree('purple')
let orangeTree: Tree= new Tree('orange')
myGarden.addToGarden(yellowFlower)
myGarden.addToGarden(blueFlower)
myGarden.addToGarden(purpleTree)
myGarden.addToGarden(orangeTree)

myGarden.watering(40)
myGarden.watering(70)

