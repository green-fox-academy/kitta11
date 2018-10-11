import random
import sys
import os
from plant import Plants
from garden import Garden
from flower import Flower
from tree import Tree

myGarden = Garden()

yellowFlower = Flower('yellow')
blueFlower = Flower('blue')
purpleTree = Tree('purple')
orangeTree = Tree('orange')

myGarden.addToGarden(yellowFlower)
myGarden.addToGarden(blueFlower)
myGarden.addToGarden(purpleTree)
myGarden.addToGarden(orangeTree)

print('\n')
myGarden.printGarden()
print('\n')
myGarden.watering(20)
myGarden.printGarden()
print('\n')
myGarden.watering(30)
myGarden.printGarden()
print('\n')
myGarden.watering(40)
myGarden.printGarden()
