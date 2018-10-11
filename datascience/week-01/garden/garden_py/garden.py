import random
import sys
import os
from plant import Plants


class Garden:

    def __init__(self):
        self._plants = []

    def addToGarden(self, item):
        self._plants.append(item)

    def doesneedwater(self, item):
        return item.needWater()

    def watering(self, totalWater):
        print("Watering with:", totalWater)
        for i in range(len(self._plants)):
            if (self._plants[i].needWater()):
                self._plants[i].beWatered(
                    totalWater/len(list(filter(self.doesneedwater, self._plants))))

    def printGarden(self):
        for i in range(len(self._plants)):
            if (self._plants[i].needWater()):
                print(
                    f"The {self._plants[i].get_color()}  {self._plants[i].get_type()} needs water ")
            else:
                print(
                    f"The {self._plants[i].get_color()}  {self._plants[i].get_type()} does not need water ")
